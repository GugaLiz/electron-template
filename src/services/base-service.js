import Mock from './zt/api-mock';
import clearUndefinedField from "../utils/clear-undefined-field";
import ErrorCodeHandle from "../utils/error-code-handle";
import axios from 'axios';
import Toast from '../components/toast';

/**
 * 基础类
 */
class BaseService {
  constructor() {
    this.mock = new Mock();
  }

  /**
   * 请求方法
   * @returns {Promise<unknown>}
   */
  async request({url, data, method = 'get', showFailToast = false, ...rest}) {
    console.log('[开始]: 请求地址: ' + url);
    /**
     * @type {IApiMockItem|null}
     */
    const mockItem = await this.mock.tryMock(url);

    let requestPromise;

    /**
     * 清除 undefined 的字段
     */
    data && clearUndefinedField(data);

    if (mockItem) {
      requestPromise = Promise.resolve(mockItem);
    } else {
      requestPromise = axios({
        url,
        data,
        method,
        header: {
          'content-type': 'application/json',
        },
        withCredentials: true,
        ...rest,
      });
    }
    return requestPromise.then((response) => {
      const {code, message} = response.data || {};
      code && ErrorCodeHandle(code);

      if (code === 1) {
        return response.data;
      } else {
        if (showFailToast) {
          Toast.info({title: message});
        }

        throw response.data;
      }

    }).catch((error) => {
      if (showFailToast) {
        Toast.info({title: JSON.stringify(error)});
      }
      throw error;
    });
  }
}

export default BaseService;

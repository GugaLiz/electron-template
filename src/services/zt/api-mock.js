import * as React from 'react';
import mockConfig from './mock.json';
import { MOCK_ENABLE } from '../../constants';
import { ZT_ROOT_ADDRESS } from '../../constants/url';
import mockStore from '../../utils/stores/mock-store';
import ApiMockOverlay from '../../components/modal/api-mock-overlay';
import ApiMockOverlayStore from '../../components/modal/api-mock-overlay/store';
import Toast from '../../components/toast';

class ApiMock {
  constructor() {
    this.enable = MOCK_ENABLE;
    this.config = this.enable ? mockConfig : {};
  }

  /**
   * 获取mock数据
   * @param {string} requestUrl
   * @returns {IApiMockItem[]}
   */
  getApiMockItems(requestUrl) {
    let mockItems;
    if (this.config) {

      Object.keys(this.config).forEach((key) => {
        if (ZT_ROOT_ADDRESS + key === requestUrl) {
          mockItems = this.config[key];
        }
      });
    }
    return mockItems;
  }

  /**
   * 处理 mock 场景
   * @param requestUrl
   * @returns {Promise<IApiMockItem|null>}
   */
  tryMock(requestUrl) {
    if (!this.enable) {
      return null;
    }
    const mockItems = this.getApiMockItems(requestUrl);
    let isToastLoading;
    const promise =  new Promise((resolve) => {
      if (mockItems && mockItems.length) {
        const apiMockOverlayStore = new ApiMockOverlayStore({
          visible: true,
          mockItems,
          onVisible: () => {
            setTimeout(() => {
              if (Toast.isLoading) {
                isToastLoading = true;
                Toast.hide();
              }
            }, 500);
          },
          onChoose: resolve,
        });
        mockStore.setComponent(<ApiMockOverlay store={apiMockOverlayStore} />);
      } else {
        return resolve(null);
      }
    })

    promise.finally(() => {
      if (isToastLoading) {
        // noinspection JSIgnoredPromiseFromCall
        Toast.loading();
      }
    });

    return promise;
  }
}

export default ApiMock;

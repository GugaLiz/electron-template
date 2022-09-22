import { computed, observable } from 'mobx';
import BaseModal from '../store';

/**
 * 接口 mock (store) 逻辑
 * @class ApiMockOverlayStore
 * @extends BaseModal
 */
class ApiMockOverlayStore extends BaseModal {
  /**
   * 接口 mock 数据列表
   * @type {IApiMockItem[]}
   */
  @observable mockItems;

  /**
   * @param mockItems
   * @param onChoose
   * @param rest
   */
  constructor({ mockItems, onChoose, ...rest }) {
    super();
    this.mockItems = mockItems;
    onChoose && (this.onChoose = onChoose);
    Object.assign(this, rest);
  }

  /**
   * 成功的接口 mock 数据列表
   * @returns {IApiMockItem[]}
   */
  @computed
  get successMocks() {
    return this.mockItems.slice().filter((mockItems) => {
      return this.isSuccessCode(mockItems.data.code);
    });
  }

  /**
   * 失败的接口 mock 数据列表
   * @returns {IApiMockItem[]}
   */
  @computed
  get errorMocks() {
    return this.mockItems.slice().filter((mockItems) => {
      return !this.isSuccessCode(mockItems.data.code);
    });
  }

  /**
   * 选择回到
   * @param {IApiMockItem | null} mockItem
   */
  onChoose = (mockItem) => {
    throw new Error('to be implement');
  };

  /**
   * 选择的点击回调
   * @param {IApiMockItem | null} mockItem
   */
  onChooseClick = (mockItem) => {
    this.close();
    this.onChoose(mockItem);
  };

  /**
   * 是否是成功的验证码
   * @param code
   * @returns {boolean}
   */
  isSuccessCode = (code) => {
    return code === 1;
  };
}

export default ApiMockOverlayStore;

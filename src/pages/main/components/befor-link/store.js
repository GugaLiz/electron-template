import { observable } from 'mobx';

class BeforeLinkStore {
  /**
   * 连接的服务器类型
   * @type {string}
   */
  @observable
  serverType = 'Speedy';

  /**
   * 剩余天数
   */
  @observable
  remainDays = 0;
  /**
   * 点击连接
   */
  onConnectClick = () => {
    console.log('点击连接');
  }
  constructor({ ...rest } = {}) {
    Object.assign(this, rest);
  }

  use() {}
}
export default BeforeLinkStore;

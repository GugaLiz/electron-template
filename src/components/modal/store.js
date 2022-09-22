import {action, observable} from 'mobx';
import {useEffect} from 'react';

/**
 * 基础弹窗逻辑
 */
class BaseModal {
  /**
   * 是否显示弹窗
   * @type {boolean}
   */
  @observable visible = false;

  /**
   * 弹窗标题
   * @type {Function}
   */
  @action
  open = () => {
    this.visible = true;
  };

  /**
   * 关闭弹窗
   */
  @action
  close = () => {
    this.visible = false;
  };

  /**
   * 显示的时候回调
   */
  onVisible = () => {
    console.log('onVisible');
  };

  use() {
    useEffect(() => {
      if (this.visible) {
        this.onVisible?.();
      }
      // eslint-disable-next-line
    }, [this.visible]);
  }
}

export default BaseModal;

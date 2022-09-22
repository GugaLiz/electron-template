import { Toast as AntdToast } from 'antd-mobile';

/**
 * 吐司提示
 */
class Toast {
  /**
   * 展示基本信息
   * @param {string} title
   * @param options
   */
  async info({ title, ...options }) {
    this.isLoading = false;
    return AntdToast.show({
      content: title,
      icon: '',
      duration: 2000,
      ...options,
    });
  }

  /**
   * 展示loading
   * @param {string} [title]
   * @param [options]
   */
  async loading({ title = '努力加载中...', ...options } = {}) {
    this.isLoading = true;
    return AntdToast.show({
      content: title,
      icon: 'loading',
      duration: 999999,
      ...options,
    });
  }

  /**
   * 隐藏 toast
   */
  hide(options) {
    return AntdToast.clear();
  }

  /**
   * 仅仅隐藏 loading
   * @param [options]
   * @returns {Promise<void>|void}
   */
  hideLoading(options) {
    const loading = this.isLoading;
    this.isLoading = false;
    if (loading) {
      return this.hide(options);
    }
    return Promise.resolve();
  }

  /**
   * 成功
   * @param {string} title
   * @param options
   */
  async success({ title, ...options }) {
    this.isLoading = false;
    return AntdToast.show({
      content: title,
      icon: 'success',
      duration: 2000,
      ...options,
    });
  }

  /**
   * 失败
   * @param {string} title
   * @param options
   */
  async error({ title, ...options }) {
    this.isLoading = false;
    return AntdToast.show({
      content: title,
      icon: 'fail',
      duration: 2000,
      ...options,
    });
  }
}

const toast = new Toast();
export default toast;

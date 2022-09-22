import renderApp from '@src/render-app';
/**
 * 禁止浏览器自动帮助恢复滚动位置
 * @type {string}
 */

window.history.scrollRestoration = 'manual';

/**
 * 是否已经运行, 用于检查 hot reload
 */
let hasRan = false;
/**
 * 自执行入口
 */
(async () => {
  if (!hasRan) {

    /**
     * 标识已经运行过
     */
    hasRan = true;
  }

  /**
   * 渲染App
   */
  renderApp();
})();


/**
 * 热更新
 */
if (module.hot) {
  module.hot.accept();
}

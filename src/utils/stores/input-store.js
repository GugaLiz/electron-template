import { computed, observable } from 'mobx';
import { autobind } from 'core-decorators';
import { isUndefined } from '@src/utils/type-utils';

/**
 * 处理input框的输入值,用于解决有限制条件时输入中文拼音时会触发onChange事件导致拼音输入被打断
 *
 * @example
 * index.js页面
 *
 * <Input
     placeholder="请输入文字"
     maxLength={20}
     value={store.inputStore.value}
     onChange={store.inputStore.onChange}
     onCompositionStart={store.inputStore.onCompositionStart}
     onCompositionEnd={store.inputStore.onCompositionEnd}
   />
 *
 *
 * store.js页面
 *
 * inputStore = new InputStore({
 *   onChange: v => {
 *    if (!this.inputStore.isCompositionLock) {
 *    //不允许存在特殊符号
 *      this.inputStore.value = v.replace(/[^A-Za-z0-9\u4e00-\u9fa5 ]/g, '');
 *    } else {
 *      this.inputStore.value = v;
 *    }
 *  }
 *});
 */
class InputStore {
  /**
   * 当前值
   */
  @observable value;

  /**
   * 中文舒服法时是否有锁
   * @type {boolean}
   */
  isCompositionLock = false;

  constructor({ value = '', onChange = this.onChange } = {}) {
    this.value = value;
    this.onChange = onChange;
  }

  /**
   * 值发生变化时会掉
   * @param value
   */
  @autobind
  onChange(value) {
    let val = value?.target?.value;
    val = val.trim();
    if (!isUndefined(val)) {
      this.value = val;
    } else {
      this.value = value.trim();
    }
  }

  /**
   * 中文输入法开始输入时
   */
  @autobind
  onCompositionStart() {
    this.isCompositionLock = true;
  }

  /**
   * 中文输入法结束回传值时
   * @param e
   */
  @autobind
  onCompositionEnd(e) {
    this.isCompositionLock = false;
    this.onChange(e.target.value);
  }

  /**
   * 获取去除空格后的值
   * @returns {string}
   */
  @computed
  get trimmedValue() {
    return (this.value || '').trim();
  }
}

export default InputStore;

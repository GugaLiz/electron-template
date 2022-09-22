import InputStore from '@src/utils/store/input-store';

class TinyInputStore extends InputStore {
  constructor({ ...rest } = {}) {
    super();
    Object.assign(this, rest);
  }

  /**
   * html element ref 获取 dom 实例
   * 常用如:
   * 当外部校验表单发现当前字段为空时
   */
  elementRef;
  use() {}
}

export default TinyInputStore;

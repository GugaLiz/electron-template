/**
 * 清除 undefined 的字段
 * 暂时先只做第一层清除
 * @param obj
 */
const clearUndefinedField = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}

export default clearUndefinedField;

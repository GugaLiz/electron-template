/**
 * 是否数字
 * @param value
 * @return {boolean}
 */
export function isNumber(value) {
  return typeof value === 'number';
}

/**
 * 是否字符串
 * @param value
 * @return {boolean}
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * 是否是函数
 * @param value
 * @return {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * 是否是类似对象
 * @param value
 * @return {boolean}
 */
export function isObjectLike(value) {
  return typeof value === 'object';
}

/**
 * 是否是对象
 * @param value
 * @return {*}
 */
export function isObject(value) {
  return isTypeMatch(value, 'Object');
}

/**
 * 是否是数组
 * @param value
 * @return {*}
 */
export function isArray(value) {
  return isTypeMatch(value, 'Array');
}

/**
 * 是否是正则
 * @param value
 * @return {*}
 */
export function isRegExp(value) {
  return isTypeMatch(value, 'RegExp');
}

/**
 * 匹配类型检测
 * @param value
 * @param typeName
 * @return {boolean}
 */
export function isTypeMatch(value, typeName) {
  return Object.prototype.toString.call(value) === `[object ${typeName}]`;
}

/**
 * 是否是布尔
 * @param value
 * @return {boolean}
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * 是否是undefined
 * @param value
 * @return {boolean}
 */
export function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * 是否是null或者undefined
 * @param value
 * @return {boolean}
 */
export function isNullOrUndefined(value) {
  return value === null || isUndefined(value);
}

/**
 * 是否是 promise
 * @param value
 * @return {boolean}
 */
export function isPromise(value) {
  return require('is-promise')(value);
}

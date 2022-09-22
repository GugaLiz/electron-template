
export default class DateUtil {

  /**
   * 格式化日期
   *
   * e.g.
   *
   * formatDate(new Date(), "yyyy年MM月dd hh时mm分ss秒")
   * // "2019年17月24 17时10分29秒"
   *
   * @param {Date} dateObj - 日期对象
   * @param {string} format - 格式化对象 - "yyyy/MM/dd hh:mm:ss"
   * @return {*}
   */
  static formatDate(dateObj, format) {
    const date = {
      'M+': dateObj.getMonth() + 1,
      'd+': dateObj.getDate(),
      'h+': dateObj.getHours(),
      'm+': dateObj.getMinutes(),
      's+': dateObj.getSeconds(),
      'q+': Math.floor((dateObj.getMonth() + 3) / 3),
      'S+': dateObj.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
      }
    }
    return format;
  }

  /**
   * 格式化"月/日"
   * formatMonthDay(new Date())
   * // 09/14
   *
   * @param {Date|Number} dateObj - 日期对象
   * @param {string} [format] - 格式化对象, 支持: "yyyy/MM/dd hh:MN:ss". 默认: "MM/dd"
   * @return {*}
   */
  static formatMonthDay(dateObj, format = 'MM/dd') {
    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }
    return DateUtil.formatDate(dateObj, format);
  }
}

/**
 * 接口 mock 数据结构
 */
export interface IApiMockItem {
  name: string,
  data: {
    code: number,
    status: number,
    msg: string,
    message: string,
    data: object
  }
}

import BaseService from '../base-service';
import zt from './zt';
import {ZT_ROOT_ADDRESS} from '../../constants/url.js';

export default class ZtService {
  constructor() {
    this.baseService = new BaseService();
  }

  createService() {
    return zt((rawUrl, rawParams) => this.baseService.request({url: rawUrl, ...rawParams}), response => Promise.reject(response), ZT_ROOT_ADDRESS );
  }
}

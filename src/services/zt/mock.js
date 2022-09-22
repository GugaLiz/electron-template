import mockConfig from './mock.json';
import {MOCK_ENABLE} from '../../constants';
import {ZT_ROOT_ADDRESS} from "../../constants/url";

class Mock {
  constructor() {
    this.enable = MOCK_ENABLE;
    this.config = this.enable ? mockConfig : {};
  }

  getData(requestUrl) {
    if (!this.enable) {
      return null;
    }
    let mockRequest;
    if (this.config) {
      Object.keys(this.config).forEach((key) => {
        if (ZT_ROOT_ADDRESS + key === requestUrl) {
          mockRequest = this.config[key];
        }
      });
    }
    return mockRequest && mockRequest[0].data;

  }
}

export default Mock;

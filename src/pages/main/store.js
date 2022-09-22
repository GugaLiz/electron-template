import { observable } from 'mobx';
import BeforeLinkStore from './components/befor-link/store';
import { useEffect } from 'react';

class MainStore {
  beforeLinkStore = new BeforeLinkStore();

  @observable pageType;

  constructor({ ...rest } = {}) {
    Object.assign(this, rest);
  }

  use() {
    useEffect(()=>{
      this.pageType = 'before-link';
    },[])
  }
}
export default MainStore;

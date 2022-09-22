import { observable } from 'mobx';

class MockStore {
  @observable
  component;

  setComponent(component) {
    this.component = component;
  }

  getComponent() {
    return this.component || undefined;
  }
}

const mockStore = new MockStore();
export default mockStore;

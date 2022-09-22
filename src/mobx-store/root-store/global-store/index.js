import { autobind } from 'core-decorators';

@autobind
class GlobalStore {}

const globalStore = new GlobalStore();
export default globalStore;

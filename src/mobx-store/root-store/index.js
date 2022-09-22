import globalStore from '@src/mobx-store/root-store/global-store';

// noinspection SpellCheckingInspection
const rootStore = {
  globalStore,
};

window.rootStore = rootStore;

export default rootStore;

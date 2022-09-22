import * as React from 'react';
import useStore from '@src/utils/hooks/use-store';
import wrapStore from '@src/utils/wrap-store';
import Page from '@src/components/page';
import MainStore from './store';
import BeforeLink from './components/befor-link';
const styles = require('./index.less');

const Main = () => {
  const store = useStore(() => new MainStore());
  return (
          <Page className={styles.root}>
            {store.pageType === 'before-link' && <BeforeLink store={store.beforeLinkStore} />}
          </Page>
      );
};

export default wrapStore(Main,MainStore);

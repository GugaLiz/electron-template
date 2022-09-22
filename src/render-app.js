import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import rootStore from '@src/mobx-store/root-store';
import AppRouter from './pages/app-router';

const renderApp = () => {
  render(
    <Provider {...rootStore}>
      <AppRouter />
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;

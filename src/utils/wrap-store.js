import React, { useMemo } from 'react';
import { observer } from 'mobx-react';

/**
 * 当外部没有提供 store 时, 可以自动注入创建匿名 store, 并捆绑对应组件
 * @param {Function} createStore - 用于创建 store 的 Function
 * @example
 * 用法1: wrapStore(() => new TinyInputStore())(TinyInput);
 * 用法2: wrapStore(TinyInput, TinyInputStore);
 */
const wrapStore = function(createStore) {
  const argsLength = arguments.length;
  if (argsLength === 1) {
    return Component => {
      const ObserverComponent = observer(Component);
      return ({ store, ...rest }) => {
        const memoStore = useMemo(createStore, []);
        return <ObserverComponent store={store || memoStore} {...rest} />;
      };
    };
  } else if (argsLength === 2) {
    const ObserverComponent = observer(arguments[0]);
    const StoreClass = arguments[1];
    return ({ store, ...rest }) => {
      const memoStore = useMemo(() => new StoreClass(), []);
      const finalStore = store || memoStore;
      return <ObserverComponent store={finalStore} {...rest} />;
    };
  }
  throw new Error('invalid argument number. expected 1 or 2 argument for this function');
};

export default wrapStore;

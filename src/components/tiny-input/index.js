import React from 'react';
import cx from 'classnames';
import styles from './index.less';
import wrapStore from '@src/utils/wrap-store';
import TinyInputStore from '@src/components/tiny-input/store';

/**
 * 小型输入框
 * @param {TinyInputStore} store
 * @param {string} className
 * @param {object} rest
 * @returns {JSX.Element}
 * @constructor
 */
const TinyInput = wrapStore(({ store, className, ...rest }) => {
  store.use();
  return <input ref={store.elementRef} className={cx(className, styles.input)} value={store.value} onChange={store.onChange} {...rest} />;
}, TinyInputStore);

export default TinyInput;

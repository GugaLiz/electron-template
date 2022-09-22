import { Modal } from 'antd-mobile';
import ApiMockOverlayStore from './store';
import wrapStore from '../../../utils/wrap-store';
import styles from './index.less';
import Link from '../../link';

/**
 * 秘籍记录
 * @param {ApiMockOverlayStore} store
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const ApiMockOverlay = ({ store, ...rest }) => {
  store.use();

  /**
   * 渲染成功时候的 mock
   */
  const renderSuccessMocks = () => {
    return store.successMocks.map((mockItem, index) => {
      return <div className={styles.mockItem} key={index}><Button className={styles.button} onClick={() => store.onChooseClick(mockItem)}>{mockItem.name}</Button></div>;
    });
  };

  /**
   * 渲染成功时候的 mock
   */
  const renderErrorMocks = () => {
    return store.errorMocks.map((mockItem, index) => {
      return <div className={styles.mockItem} key={index}><Button className={styles.button} onClick={() => store.onChooseClick(mockItem)}>{mockItem.name}</Button></div>;
    });
  };

  return (
    <Modal
      isOpened={store.visible}
      onClose={store.close}
      closeOnClickOverlay={false}
      {...rest}
    >
      <div className={styles.title}>选择Mock接口</div>
      <div>
        <div className={styles.section}>
          <div>成功</div>
          <div className={styles.mockItems}>{renderSuccessMocks()}</div>
        </div>
        <div className={styles.section}>
          <div>失败</div>
          <div className={styles.mockItems}>{renderErrorMocks()}</div>
        </div>
        <div className={styles.divider} />
        <Link className={styles.button} onClick={() => store.onChooseClick(null)}>使用网络接口</Link>
      </div>
    </Modal>
  );
};

export default wrapStore(ApiMockOverlay, ApiMockOverlayStore);

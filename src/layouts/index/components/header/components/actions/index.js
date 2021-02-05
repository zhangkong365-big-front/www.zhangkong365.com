import styles from './index.css';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-locale';
import iconMenu from './assets/mobile/icon-menu.png';
import iconMenu2x from './assets/mobile/icon-menu@2x.png';
import iconMenu3x from './assets/mobile/icon-menu@3x.png';
import iconClose from './assets/mobile/icon-close.png';
import iconClose2x from './assets/mobile/icon-close@2x.png';
import iconClose3x from './assets/mobile/icon-close@3x.png';

const actions = [
  'product',
  'scene',
  'service',
  'case',
  'trial',
];

function changeAction(item) {
  if (window.g_app._history.location.pathname === '/download') {
    window.open('/');
    return false;
  }

  window.g_app._store.dispatch({
    type: 'activeAction/change',
    payload: item,
  });

  // 触发锚点
  const element = document.getElementById(item);
  element.scrollIntoView({
    behavior: 'smooth',
  });

  // 关闭操作
  window.g_app._store.dispatch({
    type: 'actionsVisible/change',
    payload: false,
  });

  return false;
}

function changeActionsVisible(value) {
  window.g_app._store.dispatch({
    type: 'actionsVisible/change',
    payload: value,
  });
}

// 监听滚动条实现动态锚点
window.addEventListener('scroll', () => {
  if (window.g_app._history.location.pathname === '/') {
    actions.forEach((item, index) => {
      const next = actions[index + 1] || 'footer';

      const currentElement = document.getElementById(item);
      const nextElement = document.getElementById(next);
      const currentElementTop = currentElement.getBoundingClientRect().top - 200;
      const nextElementTop = nextElement.getBoundingClientRect().top;

      const currentTop = document.documentElement.offsetTop;
      if (currentTop >= currentElementTop && currentTop < nextElementTop) {
        window.g_app._store.dispatch({
          type: 'activeAction/change',
          payload: item,
        });
      }
    });
  }
});

function BasicHeaderActions({ activeAction, actionsVisible }) {
  return (
    <div className={styles.headerActionsContainer}>
      {
        actions.map((item, index) => {
          return (
            /* eslint-disable-next-line */
            <a
              key={index}
              className={`${styles.headerActionsA} ${ activeAction === item ? styles.headerActionsAActive : '' }`}
              onClick={() => changeAction(item)}
            >
              <FormattedMessage id={item} />
            </a>
          );
        })
      }

      {/* 客户端下载 */}
      <a
        className={`${styles.headerActionsA} ${ window.g_app._history.location.pathname === '/download' ? styles.headerActionsAActive : '' }`}
        href='/download'
        target='_blank'
      >
        <FormattedMessage id={'download'} />
      </a>

      {/* 手机版 */}
      {
        actionsVisible ? (
          <img
            alt={'icon-close'}
            src={iconClose}
            srcSet={`${iconClose2x} 2x, ${iconClose3x} 3x`}
            className={styles.headerActionIcon}
            onClick={() => changeActionsVisible(false)}
          />
        ) : (
          <img
            alt={'icon-menu'}
            src={iconMenu}
            srcSet={`${iconMenu2x} 2x, ${iconMenu3x} 3x`}
            className={styles.headerActionIcon}
            onClick={() => changeActionsVisible(true)}
          />
        )
      }

      <div className={`${styles.headerActionsSmallContainer} ${actionsVisible ? styles.headerActionsSmallContainerFlex : ''}`}>
        <div className={styles.headerActionsSmallWrapper}>
          {
            actions.map((item, index) => {
              return (
                /* eslint-disable-next-line */
                <a
                  key={index}
                  className={`${styles.headerSmallActionsA} ${ activeAction === item ? styles.headerSmallActionsAActive : '' }`}
                  onClick={() => changeAction(item)}
                >
                  <FormattedMessage id={item} />
                </a>
              );
            })
          }

          {/* 客户端下载 */}
          <a
            className={`${styles.headerSmallActionsA} ${ window.g_app._history.location.pathname === '/download' ? styles.headerSmallActionsAActive : '' }`}
            href='/download'
            target='_blank'
          >
            <FormattedMessage id={'download'} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default connect(({ activeAction,  actionsVisible}) => ({
  activeAction,
  actionsVisible,
}))(BasicHeaderActions);

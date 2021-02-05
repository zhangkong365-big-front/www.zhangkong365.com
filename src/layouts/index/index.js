import styles from './index.css';
import BasicHeader from "./components/header";
import BasicFooter from './components/footer';
import BasicBackTop from './components/backTop';

function BasicLayout(props) {
  return (
    <div className={styles.mainContainer}>
      {/* 顶部 */}
      <BasicHeader />

      {/* 内容 */}
      {props.children}

      {/* 底部 */}
      <BasicFooter />

      {/* 返回顶部 */}
      <BasicBackTop />
    </div>
  );
}

export default BasicLayout;

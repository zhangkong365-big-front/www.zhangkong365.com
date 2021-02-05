import styles from './index.css';
import BasicHeader from "../../layouts/index/components/header";
import BasicFooter from "../../layouts/index/components/footer";
import BasicBackTop from "../../layouts/index/components/backTop";
import DownloadClient from './components/client';

function Download() {
  return (
    <div className={styles.mainContainer}>
      {/* 顶部 */}
      <BasicHeader />

      {/* 客户端下载 */}
      <DownloadClient />

      {/* 底部 */}
      <BasicFooter />

      {/* 返回顶部 */}
      <BasicBackTop />
    </div>
  );
}

export default Download;

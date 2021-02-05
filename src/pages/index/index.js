import styles from './index.css';
import IndexBanner from './components/banner';
import IndexMsg from './components/msg';
import IndexDescription from './components/description';
import IndexBrief from './components/brief';
import IndexScene from './components/scene';
import IndexService from './components/service';
import IndexEvaluate from './components/evaluate';
import IndexPartner from './components/partner';
import IndexTrial from './components/trial';

function Index() {
  return (
    <div className={styles.indexContainer}>
      {/* banner */}
      <IndexBanner />

      {/* 信息 */}
      <IndexMsg />

      {/* 详细描述 */}
      <IndexDescription />

      {/* 简介 */}
      <IndexBrief />

      {/* 场景 */}
      <IndexScene />

      {/* 服务 */}
      <IndexService />

      {/* 评价 */}
      <IndexEvaluate />

      {/* 合作伙伴 */}
      <IndexPartner />

      {/* 免费试用 */}
      <IndexTrial />
    </div>
  );
}

export default Index;

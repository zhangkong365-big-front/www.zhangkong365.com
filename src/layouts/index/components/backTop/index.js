import styles from './index.css';
import { BackTop } from 'antd';
import backTop from './assets/back-top.png';
import backTop2x from './assets/back-top@2x.png';
import backTop3x from './assets/back-top@3x.png';

function BasicBackTop() {
  return (
    <BackTop>
      <img
        alt={'back-top'}
        src={backTop}
        srcSet={`${backTop2x} 2x, ${backTop3x} 3x`}
        className={styles.backTopIcon}
      />
    </BackTop>
  );
}

export default BasicBackTop;

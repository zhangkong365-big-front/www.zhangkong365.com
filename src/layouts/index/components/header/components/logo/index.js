import styles from './index.css';
import logoTop from './assets/logo-top.png';
import logoTop2x from './assets/logo-top@2x.png';
import logoTop3x from './assets/logo-top@3x.png';
import logoTopEn from './assets/en/2-4-x.png';
import logoTopEn2x from './assets/en/2-4-x@2x.png';
import logoTopEn3x from './assets/en/2-4-x@3x.png';
import { getLocale } from 'umi-plugin-locale';
import router from 'umi/router';

function toIndex() {
  router.push('/');
}

function BasicHeaderLogo() {
  return (
    <div className={styles.headerLogoContainer} onClick={() => toIndex()}>
      {
        getLocale() === 'en-US' ? (
          <img
            alt={'logo-top-en'}
            src={logoTopEn}
            srcSet={`${logoTopEn2x} 2x, ${logoTopEn3x} 3x`}
            className={styles.headerEnLogo}
          />
        ) : (
          <img
            alt={'logo-top'}
            src={logoTop}
            srcSet={`${logoTop2x} 2x, ${logoTop3x} 3x`}
            className={styles.headerLogo}
          />
        )
      }
    </div>
  );
}

export default BasicHeaderLogo;

import styles from './index.css';
import imgTerminal from './assets/img-terminal.png';
import imgTerminal2x from './assets/img-terminal@2x.png';
import imgTerminal3x from './assets/img-terminal@3x.png';
import mobileImgTerminal from './assets/mobile/img-terminal.png';
import mobileImgTerminal2x from './assets/mobile/img-terminal@2x.png';
import mobileImgTerminal3x from './assets/mobile/img-terminal@3x.png';
import { FormattedMessage } from 'umi-plugin-locale';
import ConstantUtil from '../../../../utils/constant';
import UrlUtil from '../../../../utils/url';

function getBannerBottom() {
  const seoValue = UrlUtil.getParameterValue(ConstantUtil.SEO_PARAMETER_KEY);

  let id;

  switch (seoValue) {
    case ConstantUtil.SEO_KEY_WORD_KANBAN:
      id = 'bannerBottom1';
      break;
    case ConstantUtil.SEO_KEY_WORD_DIGITAL:
      id = 'bannerBottom2';
      break;
    case ConstantUtil.SEO_KEY_WORD_PLATFORM:
      id = 'bannerBottom3';
      break;
    case ConstantUtil.SEO_KEY_WORD_MONITOR:
      id = 'bannerBottom4';
      break;
    default:
      id = 'bannerBottom1';
      break;
  }

  return (
    <FormattedMessage id={id} />
  );
}

function IndexBanner() {
  return (
    <div id={'product'} className={`${styles.bannerContainer} wow fadeInUp`} data-wow-duration='2s'>
      <div className={styles.bannerWrapper}>
        <div className={styles.bannerTextContainer}>
          <div className={styles.bannerTextWrapper}>
            <div className={styles.bannerTextTop}>
              <FormattedMessage id={'bannerTop'} />
            </div>
            <div className={styles.bannerTextMiddle}>
              <FormattedMessage id={'bannerMiddle'} />
            </div>
            <div className={styles.bannerLine} />
            <div className={styles.bannerTextBottom}>
              {getBannerBottom()}
            </div>
          </div>
        </div>
        <img
          alt={'img-terminal'}
          src={imgTerminal}
          srcSet={`${imgTerminal2x} 2x, ${imgTerminal3x} 3x`}
          className={styles.bannerBg}
        />

        {/* 手机版 */}
        <img
          alt={'mobile-img-terminal'}
          src={mobileImgTerminal}
          srcSet={`${mobileImgTerminal2x} 2x, ${mobileImgTerminal3x} 3x`}
          className={styles.mobileBannerBg}
        />
      </div>
    </div>
  );
}

export default IndexBanner;

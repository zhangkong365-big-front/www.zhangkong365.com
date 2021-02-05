import styles from './index.css';
import logoButton from "./assets/logo-button.png";
import logoButton2x from "./assets/logo-button@2x.png";
import logoButton3x from "./assets/logo-button@3x.png";
import { FormattedMessage } from 'umi-plugin-locale';
import imgCode from "./assets/img-code.png";
import imgCode2x from "./assets/img-code@2x.png";
import imgCode3x from "./assets/img-code@3x.png";
import { Popover } from 'antd';
import iconWechat from "./assets/mobile/icon-wechat.png";
import iconWechat2x from "./assets/mobile/icon-wechat@2x.png";
import iconWechat3x from "./assets/mobile/icon-wechat@3x.png";
import mobileImgCode from "./assets/mobile/img-code.png";
import mobileImgCode2x from "./assets/mobile/img-code@2x.png";
import mobileImgCode3x from "./assets/mobile/img-code@3x.png";
import { getLocale } from 'umi-plugin-locale';
import logoButtonEn from './assets/en/2-4-x.png';
import logoButtonEn2x from './assets/en/2-4-x@2x.png';
import logoButtonEn3x from './assets/en/2-4-x@3x.png';

const content = (
  <img
    alt={'mobile-img-code'}
    src={mobileImgCode}
    srcSet={`${mobileImgCode2x} 2x, ${mobileImgCode3x} 3x`}
    className={styles.footerSmallCodeIcon}
  />
);

const contentText = (
  <div style={{ width: 300 }}>
    <FormattedMessage id={'footerLeftPopoverText'} />
  </div>
);

function BasicFooter() {
  return (
    <div id={'footer'} className={`${styles.footerContainer} wow fadeInUp`} data-wow-duration='2s'>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLeftContainer}>
          {
            getLocale() === 'en-US' ? (
              <img
                alt={'logo-button-en'}
                src={logoButtonEn}
                srcSet={`${logoButtonEn2x} 2x, ${logoButtonEn3x} 3x`}
                className={styles.footerEnLeftIcon}
              />
            ) : (
              <img
                alt={'logo-button'}
                src={logoButton}
                srcSet={`${logoButton2x} 2x, ${logoButton3x} 3x`}
                className={styles.footerLeftIcon}
              />
            )
          }

          <Popover content={contentText}>
            <div className={styles.footerLeftText}>
              <FormattedMessage id={'footerLeftText'} />
            </div>
          </Popover>

          <div className={styles.footerLeftBeiAnText}>
            <FormattedMessage id={'footerLeftBeiAnText'} />
          </div>
        </div>

        <div className={styles.footerRightContainer}>
          <div className={styles.footerRightLeftContainer}>
            <div className={styles.footerRightLeftLargeText}>
              <FormattedMessage id={'footerRightLeftLargeText'} />
            </div>

            <div className={styles.footerRightLeftText}>
              <FormattedMessage id={'footerRightLeftText'} />
            </div>

            <div className={styles.footerRightLeftText}>
              <FormattedMessage id={'footerRightLeftTextAddress'} />
            </div>
          </div>

          <img
            alt={'img-code'}
            src={imgCode}
            srcSet={`${imgCode2x} 2x, ${imgCode3x} 3x`}
            className={styles.footerCodeIcon}
          />
        </div>
      </div>

      {/* 手机版 */}
      <div className={styles.footerSmallWrapper}>
        <div className={styles.footerSmallTopContainer}>
          <div className={styles.footerTopLeftContainer}>
            <div className={styles.footerTopLeftLargeText}>
              <FormattedMessage id={'footerRightLeftLargeText'} />
            </div>

            <div className={styles.footerTopLeftText}>
              <FormattedMessage id={'footerRightLeftText'} />
            </div>

            <div className={styles.footerTopLeftText}>
              <FormattedMessage id={'footerRightLeftTextAddress'} />
            </div>
          </div>

          <div className={styles.footerTopRightContainer}>
            <Popover content={content} trigger='click'>
              <img
                alt={'icon-wechat'}
                src={iconWechat}
                srcSet={`${iconWechat2x} 2x, ${iconWechat3x} 3x`}
                className={styles.footerTopRightIcon}
              />
            </Popover>
          </div>
        </div>

        <div className={styles.footerSmallBottomContainer}>
          <div className={styles.footerSmallBottomText}>
            <FormattedMessage id={'footerLeftText'} />
          </div>

          <div className={styles.footerSmallBottomBeiAnText}>
            <FormattedMessage id={'footerLeftBeiAnText'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicFooter;

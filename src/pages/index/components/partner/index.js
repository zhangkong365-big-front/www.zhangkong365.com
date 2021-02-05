import styles from './index.css';
import _ from 'lodash';
import logo3Case from './assets/logo-3-case.png';
import logo3Case2x from './assets/logo-3-case@2x.png';
import logo3Case3x from './assets/logo-3-case@3x.png';
import logo4Case from './assets/logo-4-case.png';
import logo4Case2x from './assets/logo-4-case@2x.png';
import logo4Case3x from './assets/logo-4-case@3x.png';
import logo5Case from './assets/logo-5-case.png';
import logo5Case2x from './assets/logo-5-case@2x.png';
import logo5Case3x from './assets/logo-5-case@3x.png';
import logo6Case from './assets/logo-6-case.png';
import logo6Case2x from './assets/logo-6-case@2x.png';
import logo6Case3x from './assets/logo-6-case@3x.png';
import logo7Case from './assets/logo-7-case.png';
import logo7Case2x from './assets/logo-7-case@2x.png';
import logo7Case3x from './assets/logo-7-case@3x.png';
import logo8Case from './assets/logo-8-case.png';
import logo8Case2x from './assets/logo-8-case@2x.png';
import logo8Case3x from './assets/logo-8-case@3x.png';
// import logo9Case from './assets/logo-9-case.png';
// import logo9Case2x from './assets/logo-9-case@2x.png';
// import logo9Case3x from './assets/logo-9-case@3x.png';
import logo10Case from './assets/logo-10-case.png';
import logo10Case2x from './assets/logo-10-case@2x.png';
import logo10Case3x from './assets/logo-10-case@3x.png';
import logo11Case from './assets/logo-11-case.png';
import logo11Case2x from './assets/logo-11-case@2x.png';
import logo11Case3x from './assets/logo-11-case@3x.png';
import mobileLogo3Case from './assets/mobile/logo-3-case.png';
import mobileLogo3Case2x from './assets/mobile/logo-3-case@2x.png';
import mobileLogo3Case3x from './assets/mobile/logo-3-case@3x.png';
import mobileLogo4Case from './assets/mobile/logo-4-case.png';
import mobileLogo4Case2x from './assets/mobile/logo-4-case@2x.png';
import mobileLogo4Case3x from './assets/mobile/logo-4-case@3x.png';
import mobileLogo5Case from './assets/mobile/logo-5-case.png';
import mobileLogo5Case2x from './assets/mobile/logo-5-case@2x.png';
import mobileLogo5Case3x from './assets/mobile/logo-5-case@3x.png';
import mobileLogo6Case from './assets/mobile/logo-6-case.png';
import mobileLogo6Case2x from './assets/mobile/logo-6-case@2x.png';
import mobileLogo6Case3x from './assets/mobile/logo-6-case@3x.png';
import mobileLogo7Case from './assets/mobile/logo-7-case.png';
import mobileLogo7Case2x from './assets/mobile/logo-7-case@2x.png';
import mobileLogo7Case3x from './assets/mobile/logo-7-case@3x.png';
import mobileLogo8Case from './assets/mobile/logo-8-case.png';
import mobileLogo8Case2x from './assets/mobile/logo-8-case@2x.png';
import mobileLogo8Case3x from './assets/mobile/logo-8-case@3x.png';
// import mobileLogo9Case from './assets/mobile/logo-9-case.png';
// import mobileLogo9Case2x from './assets/mobile/logo-9-case@2x.png';
// import mobileLogo9Case3x from './assets/mobile/logo-9-case@3x.png';
import mobileLogo10Case from './assets/mobile/logo-10-case.png';
import mobileLogo10Case2x from './assets/mobile/logo-10-case@2x.png';
import mobileLogo10Case3x from './assets/mobile/logo-10-case@3x.png';
import mobileLogo11Case from './assets/mobile/logo-11-case.png';
import mobileLogo11Case2x from './assets/mobile/logo-11-case@2x.png';
import mobileLogo11Case3x from './assets/mobile/logo-11-case@3x.png';

const partners = [
  {
    alt: 'logo-3-case',
    img: logo3Case,
    img2x: logo3Case2x,
    img3x: logo3Case3x,
  },
  {
    alt: 'logo-4-case',
    img: logo4Case,
    img2x: logo4Case2x,
    img3x: logo4Case3x,
  },
  {
    alt: 'logo-5-case',
    img: logo5Case,
    img2x: logo5Case2x,
    img3x: logo5Case3x,
  },
  {
    alt: 'logo-6-case',
    img: logo6Case,
    img2x: logo6Case2x,
    img3x: logo6Case3x,
  },
  {
    alt: 'logo-7-case',
    img: logo7Case,
    img2x: logo7Case2x,
    img3x: logo7Case3x,
  },
  {
    alt: 'logo-8-case',
    img: logo8Case,
    img2x: logo8Case2x,
    img3x: logo8Case3x,
  },
  // {
  //   alt: 'logo-9-case',
  //   img: logo9Case,
  //   img2x: logo9Case2x,
  //   img3x: logo9Case3x,
  // },
  {
    alt: 'logo-10-case',
    img: logo10Case,
    img2x: logo10Case2x,
    img3x: logo10Case3x,
  },
  {
    alt: 'logo-11-case',
    img: logo11Case,
    img2x: logo11Case2x,
    img3x: logo11Case3x,
  },
];

const mobilePartners = [
  {
    alt: 'mobile-logo-3-case',
    img: mobileLogo3Case,
    img2x: mobileLogo3Case2x,
    img3x: mobileLogo3Case3x,
  },
  {
    alt: 'mobile-logo-4-case',
    img: mobileLogo4Case,
    img2x: mobileLogo4Case2x,
    img3x: mobileLogo4Case3x,
  },
  {
    alt: 'mobile-logo-5-case',
    img: mobileLogo5Case,
    img2x: mobileLogo5Case2x,
    img3x: mobileLogo5Case3x,
  },
  {
    alt: 'mobile-logo-6-case',
    img: mobileLogo6Case,
    img2x: mobileLogo6Case2x,
    img3x: mobileLogo6Case3x,
  },
  {
    alt: 'mobile-logo-7-case',
    img: mobileLogo7Case,
    img2x: mobileLogo7Case2x,
    img3x: mobileLogo7Case3x,
  },
  {
    alt: 'mobile-logo-8-case',
    img: mobileLogo8Case,
    img2x: mobileLogo8Case2x,
    img3x: mobileLogo8Case3x,
  },
  // {
  //   alt: 'mobile-logo-9-case',
  //   img: mobileLogo9Case,
  //   img2x: mobileLogo9Case2x,
  //   img3x: mobileLogo9Case3x,
  // },
  {
    alt: 'mobile-logo-10-case',
    img: mobileLogo10Case,
    img2x: mobileLogo10Case2x,
    img3x: mobileLogo10Case3x,
  },
  {
    alt: 'mobile-logo-11-case',
    img: mobileLogo11Case,
    img2x: mobileLogo11Case2x,
    img3x: mobileLogo11Case3x,
  },
];

const partnerList = _.chunk(partners, 4);
const mobilePartnerList = _.chunk(mobilePartners, 2);

function IndexPartner() {
  return (
    <div className={`${styles.partnerContainer} wow fadeInDown`} data-wow-duration='2s'>
      {
        partnerList.map((item, index) => {
          return (
            <div key={index} className={styles.partnerRowContainer}>
              {
                item.map((childItem, childIndex) => {
                  return (
                    <div
                      key={childIndex}
                      className={styles.partnerRowItemContainer}
                    >
                      <img
                        alt={childItem.alt}
                        src={childItem.img}
                        srcSet={`${childItem.img2x} 2x, ${childItem.img3x} 3x`}
                        className={styles.partnerIcon}
                      />
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }

      {/* 手机版 */}
      {
        mobilePartnerList.map((item, index) => {
          return (
            <div key={index} className={styles.partnerSmallRowContainer}>
              {
                item.map((childItem, childIndex) => {
                  return (
                    <div
                      key={childIndex}
                      className={styles.partnerSmallRowItemContainer}
                    >
                      <img
                        alt={childItem.alt}
                        src={childItem.img}
                        srcSet={`${childItem.img2x} 2x, ${childItem.img3x} 3x`}
                        className={styles.partnerSmallIcon}
                      />
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default IndexPartner;

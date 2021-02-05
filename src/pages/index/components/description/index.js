import styles from './index.css';
import img1 from './assets/img-1.png';
import img12x from './assets/img-1@2x.png';
import img13x from './assets/img-1@3x.png';
import img2 from './assets/img-2.png';
import img22x from './assets/img-2@2x.png';
import img23x from './assets/img-2@3x.png';
import img3 from './assets/img-3.png';
import img32x from './assets/img-3@2x.png';
import img33x from './assets/img-3@3x.png';
import img4 from './assets/img-4.png';
import img42x from './assets/img-4@2x.png';
import img43x from './assets/img-4@3x.png';
import img5 from './assets/img-5.png';
import img52x from './assets/img-5@2x.png';
import img53x from './assets/img-5@3x.png';
import { FormattedMessage, getLocale } from 'umi-plugin-locale';
import DescriptionItem from './components/descriptionItem';
import mobileImg1 from './assets/mobile/img-1.png';
import mobileImg12x from './assets/mobile/img-1@2x.png';
import mobileImg13x from './assets/mobile/img-1@3x.png';
import mobileImg2 from './assets/mobile/img-2.png';
import mobileImg22x from './assets/mobile/img-2@2x.png';
import mobileImg23x from './assets/mobile/img-2@3x.png';
import mobileImg3 from './assets/mobile/img-3.png';
import mobileImg32x from './assets/mobile/img-3@2x.png';
import mobileImg33x from './assets/mobile/img-3@3x.png';
import mobileImg4 from './assets/mobile/img-4.png';
import mobileImg42x from './assets/mobile/img-4@2x.png';
import mobileImg43x from './assets/mobile/img-4@3x.png';
import mobileImg5 from './assets/mobile/img-5.png';
import mobileImg52x from './assets/mobile/img-5@2x.png';
import mobileImg53x from './assets/mobile/img-5@3x.png';
import img1En from './assets/en/img-1.png';
import img1En2x from './assets/en/img-1@2x.png';
import img1En3x from './assets/en/img-1@3x.png';
import img4En from './assets/en/img-4.png';
import img4En2x from './assets/en/img-4@2x.png';
import img4En3x from './assets/en/img-4@3x.png';
import mobileImg1En from './assets/en/mobile/img-1.png';
import mobileImg1En2x from './assets/en/mobile/img-1@2x.png';
import mobileImg1En3x from './assets/en/mobile/img-1@3x.png';
import mobileImg4En from './assets/en/mobile/img-4.png';
import mobileImg4En2x from './assets/en/mobile/img-4@2x.png';
import mobileImg4En3x from './assets/en/mobile/img-4@3x.png';

const chDescriptions = [
  {
    text: 'description1',
    items: [
      'description1Item1',
      'description1Item2',
      'description1Item3',
      'description1Item4',
    ],
    alt: 'img-1',
    img: img1,
    img2x: img12x,
    img3x: img13x,
    bgContainer: styles.descriptionBgContainer1,
  },
  {
    positionRight: true,
    text: 'description2',
    items: [
      'description2Item1',
      'description2Item2',
      'description2Item3',
    ],
    alt: 'img-2',
    img: img2,
    img2x: img22x,
    img3x: img23x,
    bgContainer: styles.descriptionBgContainer2,
  },
  {
    text: 'description3',
    items: [
      'description3Item1',
      'description3Item2',
      'description3Item3',
    ],
    alt: 'img-3',
    img: img3,
    img2x: img32x,
    img3x: img33x,
    bgContainer: styles.descriptionBgContainer3,
  },
  {
    positionRight: true,
    text: 'description4',
    items: [
      'description4Item1',
      'description4Item2',
    ],
    alt: 'img-4',
    img: img4,
    img2x: img42x,
    img3x: img43x,
    bgContainer: styles.descriptionBgContainer4,
  },
  {
    text: 'description5',
    items: [
      'description5Item1',
      'description5Item2',
    ],
    alt: 'img-5',
    img: img5,
    img2x: img52x,
    img3x: img53x,
    bgContainer: styles.descriptionBgContainer5,
  },
];

// en
const enDescriptions = [
  {
    text: 'description1',
    items: [
      'description1Item1',
      'description1Item2',
      'description1Item3',
      'description1Item4',
    ],
    alt: 'img-1-en',
    img: img1En,
    img2x: img1En2x,
    img3x: img1En3x,
    bgContainer: styles.descriptionBgContainer1,
  },
  {
    positionRight: true,
    text: 'description2',
    items: [
      'description2Item1',
      'description2Item2',
      'description2Item3',
    ],
    alt: 'img-2',
    img: img2,
    img2x: img22x,
    img3x: img23x,
    bgContainer: styles.descriptionBgContainer2,
  },
  {
    text: 'description3',
    items: [
      'description3Item1',
      'description3Item2',
      'description3Item3',
    ],
    alt: 'img-3',
    img: img3,
    img2x: img32x,
    img3x: img33x,
    bgContainer: styles.descriptionBgContainer3,
  },
  {
    positionRight: true,
    text: 'description4',
    items: [
      'description4Item1',
      'description4Item2',
    ],
    alt: 'img-4-en',
    img: img4En,
    img2x: img4En2x,
    img3x: img4En3x,
    bgContainer: styles.descriptionBgContainer4,
  },
  {
    text: 'description5',
    items: [
      'description5Item1',
      'description5Item2',
    ],
    alt: 'img-5',
    img: img5,
    img2x: img52x,
    img3x: img53x,
    bgContainer: styles.descriptionBgContainer5,
  },
];

// 手机版
const mobileChDescriptions = [
  {
    text: 'description1',
    items: [
      'description1Item1',
      'description1Item2',
      'description1Item3',
      'description1Item4',
    ],
    bgContainer: styles.descriptionSmallBgContainer1,
    alt: 'mobile-img-1',
    img: mobileImg1,
    img2x: mobileImg12x,
    img3x: mobileImg13x,
    detailContainer: styles.descriptionSmallDetailContainer1,
  },
  {
    text: 'description2',
    items: [
      'description2Item1',
      'description2Item2',
      'description2Item3',
    ],
    bgContainer: styles.descriptionSmallBgContainer2,
    alt: 'mobile-img-2',
    img: mobileImg2,
    img2x: mobileImg22x,
    img3x: mobileImg23x,
    detailContainer: styles.descriptionSmallDetailContainer2,
  },
  {
    text: 'description3',
    items: [
      'description3Item1',
      'description3Item2',
      'description3Item3',
    ],
    bgContainer: styles.descriptionSmallBgContainer3,
    alt: 'mobile-img-3',
    img: mobileImg3,
    img2x: mobileImg32x,
    img3x: mobileImg33x,
    detailContainer: styles.descriptionSmallDetailContainer3,
  },
  {
    positionRight: true,
    text: 'description4',
    items: [
      'description4Item1',
      'description4Item2',
    ],
    bgContainer: styles.descriptionSmallBgContainer4,
    alt: 'mobile-img-4',
    img: mobileImg4,
    img2x: mobileImg42x,
    img3x: mobileImg43x,
    detailContainer: styles.descriptionSmallDetailContainer4,
  },
  {
    text: 'description5',
    items: [
      'description5Item1',
      'description5Item2',
    ],
    bgContainer: styles.descriptionSmallBgContainer5,
    alt: 'mobile-img-5',
    img: mobileImg5,
    img2x: mobileImg52x,
    img3x: mobileImg53x,
    detailContainer: styles.descriptionSmallDetailContainer5,
  },
];

const mobileEnDescriptions = [
  {
    text: 'description1',
    items: [
      'description1Item1',
      'description1Item2',
      'description1Item3',
      'description1Item4',
    ],
    bgContainer: styles.descriptionSmallBgContainer1,
    alt: 'mobile-img-1',
    img: mobileImg1En,
    img2x: mobileImg1En2x,
    img3x: mobileImg1En3x,
    detailContainer: styles.descriptionSmallDetailContainer1,
  },
  {
    text: 'description2',
    items: [
      'description2Item1',
      'description2Item2',
      'description2Item3',
    ],
    bgContainer: styles.descriptionSmallBgContainer2,
    alt: 'mobile-img-2',
    img: mobileImg2,
    img2x: mobileImg22x,
    img3x: mobileImg23x,
    detailContainer: styles.descriptionSmallDetailContainer2,
  },
  {
    text: 'description3',
    items: [
      'description3Item1',
      'description3Item2',
      'description3Item3',
    ],
    bgContainer: styles.descriptionSmallBgContainer3,
    alt: 'mobile-img-3',
    img: mobileImg3,
    img2x: mobileImg32x,
    img3x: mobileImg33x,
    detailContainer: styles.descriptionSmallDetailContainer3,
  },
  {
    positionRight: true,
    text: 'description4',
    items: [
      'description4Item1',
      'description4Item2',
    ],
    bgContainer: styles.descriptionSmallBgContainer4,
    alt: 'mobile-img-4',
    img: mobileImg4En,
    img2x: mobileImg4En2x,
    img3x: mobileImg4En3x,
    detailContainer: styles.descriptionSmallDetailContainer4,
  },
  {
    text: 'description5',
    items: [
      'description5Item1',
      'description5Item2',
    ],
    bgContainer: styles.descriptionSmallBgContainer5,
    alt: 'mobile-img-5',
    img: mobileImg5,
    img2x: mobileImg52x,
    img3x: mobileImg53x,
    detailContainer: styles.descriptionSmallDetailContainer5,
  },
];

const descriptions = getLocale() === 'en-US' ? enDescriptions : chDescriptions;
const mobileDescriptions = getLocale() === 'en-US' ? mobileEnDescriptions : mobileChDescriptions;

function IndexDescription() {
  return (
    <div className={styles.descriptionContainer}>
      {
        descriptions.map((item, index) => {
          const positionRight = item.positionRight || false;

          /* 左侧图片，右侧文字 */
          if (positionRight) {
            return (
              <div key={index} className={`${styles.descriptionWrapper} wow fadeInUp`} data-wow-duration='2s'>
                <div className={styles.descriptionImgContainer}>
                  <img
                    alt={item.alt}
                    src={item.img}
                    srcSet={`${item.img2x} 2x, ${item.img3x} 3x`}
                    className={item.bgContainer}
                  />
                </div>

                <div className={styles.descriptionTextContainer}>
                  <div>
                    <div className={styles.descriptionText}>
                      <FormattedMessage id={item.text} />
                    </div>

                    <div className={styles.descriptionDetailContainer}>
                      {
                        item.items.map((childItem, childIndex) => {
                          return (
                            <DescriptionItem key={childIndex} text={childItem} />
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            /* 左侧文字，右侧图片 */

            return (
              <div key={index} className={`${styles.descriptionWrapper} wow fadeInUp`} data-wow-duration='2s'>
                <div className={styles.descriptionTextContainer}>
                  <div>
                    <div className={styles.descriptionText}>
                      <FormattedMessage id={item.text} />
                    </div>
                    <div className={styles.descriptionDetailContainer}>
                      {
                        item.items.map((childItem, childIndex) => {
                          return (
                            <DescriptionItem key={childIndex} text={childItem} />
                          );
                        })
                      }
                    </div>
                  </div>
                </div>

                <div className={styles.descriptionImgContainer}>
                  <img
                    alt={item.alt}
                    src={item.img}
                    srcSet={`${item.img2x} 2x, ${item.img3x} 3x`}
                    className={item.bgContainer}
                  />
                </div>
              </div>
            );
          }
        })
      }

      {/* 手机版 */}
      {
        mobileDescriptions.map((item, index) => {
          return (
            <div key={index} className={`${styles.descriptionSmallWrapper} wow fadeInUp`} data-wow-duration='2s'>
              <div className={styles.descriptionSmallText}>
                <FormattedMessage id={item.text} />
              </div>

              <img
                alt={item.alt}
                src={item.img}
                srcSet={`${item.img2x} 2x, ${item.img3x} 3x`}
                className={item.bgContainer}
              />

              {
                item.items.map((childItem, childIndex) => {
                  return (
                    <div key={childIndex} className={item.detailContainer}>
                      <DescriptionItem text={childItem} />
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

export default IndexDescription;

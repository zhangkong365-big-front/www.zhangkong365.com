import styles from './index.css';
import iconFast from './assets/icon-fast.png';
import iconFast2x from './assets/icon-fast@2x.png';
import iconFast3x from './assets/icon-fast@3x.png';
import iconLow from './assets/icon-low.png';
import iconLow2x from './assets/icon-low@2x.png';
import iconLow3x from './assets/icon-low@3x.png';
import iconFlexible from './assets/icon-flexible.png';
import iconFlexible2x from './assets/icon-flexible@2x.png';
import iconFlexible3x from './assets/icon-flexible@3x.png';
import { FormattedMessage } from 'umi-plugin-locale';

const briefs = [
  {
    alt: 'icon-fast',
    icon: iconFast,
    icon2x: iconFast2x,
    icon3x: iconFast3x,
    largeText: 'briefLargeText1',
    text: 'briefText1',
  },
  {
    alt: 'icon-low',
    icon: iconLow,
    icon2x: iconLow2x,
    icon3x: iconLow3x,
    largeText: 'briefLargeText2',
    text: 'briefText2',
  },
  {
    alt: 'icon-flexible',
    icon: iconFlexible,
    icon2x: iconFlexible2x,
    icon3x: iconFlexible3x,
    largeText: 'briefLargeText3',
    text: 'briefText3',
  },
];

function IndexBrief() {
  return (
    <div className={`${styles.briefContainer} wow fadeInDown`} data-wow-duration='2s'>
      <div className={styles.briefWrapper}>
        {
          briefs.map((item, index) => {
            return (
              <div key={index} className={styles.briefItemContainer}>
                <img
                  alt={item.alt}
                  src={item.icon}
                  srcSet={`${item.icon2x} 2x, ${item.icon3x} 3x`}
                  className={styles.briefIcon}
                />
                <div className={styles.briefTextContainer}>
                  <div className={styles.briefLargeText}>
                    <FormattedMessage id={item.largeText} />
                  </div>
                  <div className={styles.briefText}>
                    <FormattedMessage id={item.text} />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default IndexBrief;

import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';
import iconSafe from './assets/icon-safe.png';
import iconSafe2x from './assets/icon-safe@2x.png';
import iconSafe3x from './assets/icon-safe@3x.png';
import iconPro from './assets/icon-pro.png';
import iconPro2x from './assets/icon-pro@2x.png';
import iconPro3x from './assets/icon-pro@3x.png';
import iconTec from './assets/icon-tec.png';
import iconTec2x from './assets/icon-tec@2x.png';
import iconTec3x from './assets/icon-tec@3x.png';
import iconSup from './assets/icon-sup.png';
import iconSup2x from './assets/icon-sup@2x.png';
import iconSup3x from './assets/icon-sup@3x.png';
import iconDev from './assets/icon-dev.png';
import iconDev2x from './assets/icon-dev@2x.png';
import iconDev3x from './assets/icon-dev@3x.png';
import ServiceItem from './components/serviceItem';

const services = [
  {
    img: {
      alt: 'icon-safe',
      img: iconSafe,
      img2x: iconSafe2x,
      img3x: iconSafe3x,
    },
    largeText: 'serviceCardItemLargeText1',
    texts: [
      'serviceCardItemText11',
      'serviceCardItemText12',
      'serviceCardItemText13',
    ],
    mobileText: 'mobileServiceCardItemText1',
  },
  {
    img: {
      alt: 'icon-pro',
      img: iconPro,
      img2x: iconPro2x,
      img3x: iconPro3x,
    },
    largeText: 'serviceCardItemLargeText2',
    texts: [
      'serviceCardItemText21',
      'serviceCardItemText22',
      'serviceCardItemText23',
    ],
    mobileText: 'mobileServiceCardItemText2',
  },
  {
    img: {
      alt: 'icon-tec',
      img: iconTec,
      img2x: iconTec2x,
      img3x: iconTec3x,
    },
    largeText: 'serviceCardItemLargeText3',
    texts: [
      'serviceCardItemText31',
      'serviceCardItemText32',
      'serviceCardItemText33',
    ],
    mobileText: 'mobileServiceCardItemText3',
  },
  {
    img: {
      alt: 'icon-sup',
      img: iconSup,
      img2x: iconSup2x,
      img3x: iconSup3x,
    },
    largeText: 'serviceCardItemLargeText4',
    texts: [
      'serviceCardItemText41',
      'serviceCardItemText42',
      'serviceCardItemText43',
    ],
    mobileText: 'mobileServiceCardItemText4',
  },
  {
    img: {
      alt: 'icon-dev',
      img: iconDev,
      img2x: iconDev2x,
      img3x: iconDev3x,
    },
    largeText: 'serviceCardItemLargeText5',
    texts: [
      'serviceCardItemText51',
      'serviceCardItemText52',
      'serviceCardItemText53',
    ],
    mobileText: 'mobileServiceCardItemText5',
  },
];

function IndexService() {
  return (
    <div id={'service'} className={`${styles.serviceContainer} wow fadeInDown`} data-wow-duration='2s'>
      <div className={styles.serviceTitle}>
        <FormattedMessage id={'serviceTitle'} />
      </div>

      <div className={styles.serviceCardContainer}>
        {
          services.map((item, index) => {
            return (
              <ServiceItem
                key={index}
                img={item.img}
                largeText={item.largeText}
                texts={item.texts}
                mobileText={item.mobileText}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default IndexService;

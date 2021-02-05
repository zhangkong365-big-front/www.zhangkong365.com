import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';
import img6 from './assets/img-6.png';
import img62x from './assets/img-6@2x.png';
import img63x from './assets/img-6@3x.png';
import img7 from './assets/img-7.png';
import img72x from './assets/img-7@2x.png';
import img73x from './assets/img-7@3x.png';
import img8 from './assets/img-8.png';
import img82x from './assets/img-8@2x.png';
import img83x from './assets/img-8@3x.png';
import img9 from './assets/img-9.png';
import img92x from './assets/img-9@2x.png';
import img93x from './assets/img-9@3x.png';
import SceneItem from './components/sceneItem';
import mobileImg6 from './assets/mobile/img-6.png';
import mobileImg62x from './assets/mobile/img-6@2x.png';
import mobileImg63x from './assets/mobile/img-6@3x.png';
import mobileImg7 from './assets/mobile/img-7.png';
import mobileImg72x from './assets/mobile/img-7@2x.png';
import mobileImg73x from './assets/mobile/img-7@3x.png';
import mobileImg8 from './assets/mobile/img-8.png';
import mobileImg82x from './assets/mobile/img-8@2x.png';
import mobileImg83x from './assets/mobile/img-8@3x.png';
import mobileImg9 from './assets/mobile/img-9.png';
import mobileImg92x from './assets/mobile/img-9@2x.png';
import mobileImg93x from './assets/mobile/img-9@3x.png';
import _ from 'lodash';

const scenes = [
  {
    img: {
      alt: 'img-6',
      img: img6,
      img2x: img62x,
      img3x: img63x,
    },
    title: 'sceneTitle1',
    items: [
      'scene1Item1',
      'scene1Item2',
    ],
  },
  {
    img: {
      alt: 'img-7',
      img: img7,
      img2x: img72x,
      img3x: img73x,
    },
    title: 'sceneTitle2',
    items: [
      'scene2Item1',
      'scene2Item2',
    ],
  },
  {
    img: {
      alt: 'img-8',
      img: img8,
      img2x: img82x,
      img3x: img83x,
    },
    title: 'sceneTitle3',
    items: [
      'scene3Item1',
      'scene3Item2',
    ],
  },
  {
    img: {
      alt: 'img-9',
      img: img9,
      img2x: img92x,
      img3x: img93x,
    },
    title: 'sceneTitle4',
    items: [
      'scene4Item1',
      'scene4Item2',
    ],
  },
];

// 手机版
const mobileScenes = [
  {
    img: {
      alt: 'mobile-img-6',
      img: mobileImg6,
      img2x: mobileImg62x,
      img3x: mobileImg63x,
    },
    title: 'sceneTitle1',
    items: [
      'scene1Item1',
      'scene1Item2',
    ],
  },
  {
    img: {
      alt: 'mobile-img-7',
      img: mobileImg7,
      img2x: mobileImg72x,
      img3x: mobileImg73x,
    },
    title: 'sceneTitle2',
    items: [
      'scene2Item1',
      'scene2Item2',
    ],
  },
  {
    img: {
      alt: 'mobile-img-8',
      img: mobileImg8,
      img2x: mobileImg82x,
      img3x: mobileImg83x,
    },
    title: 'sceneTitle3',
    items: [
      'scene3Item1',
      'scene3Item2',
    ],
  },
  {
    img: {
      alt: 'mobile-img-9',
      img: mobileImg9,
      img2x: mobileImg92x,
      img3x: mobileImg93x,
    },
    title: 'sceneTitle4',
    items: [
      'scene4Item1',
      'scene4Item2',
    ],
  },
];

const sceneList = _.chunk(scenes, 2);

function IndexScene() {
  return (
    <div id={'scene'} className={`${styles.sceneContainer} wow fadeInUp`} data-wow-duration='2s'>
      <div className={styles.sceneTitle}>
        <FormattedMessage id={'sceneTitle'} />
      </div>

      <div className={styles.sceneContentContainer}>
        {
          sceneList.map((item, index) => {
            return (
              <div key={index} className={styles.sceneContentItemWrapper}>
                {
                  item.map((childItem, childIndex) => {
                    return (
                      <div
                        key={childIndex}
                        className={styles.sceneContentItemContainer}
                      >
                        <SceneItem
                          img={childItem.img}
                          title={childItem.title}
                          items={childItem.items}
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

      {/* 手机版 */}
      <div className={styles.sceneSmallContentContainer}>
        {
          mobileScenes.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.sceneSmallContentItemContainer}
              >
                <SceneItem
                  img={item.img}
                  title={item.title}
                  items={item.items}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default IndexScene;

import styles from './index.css';
import SceneDescriptionItem from '../sceneDescriptionItem';
import { FormattedMessage } from 'umi-plugin-locale';

function IndexSceneItem(props) {
  return (
    <div className={styles.sceneItemContainer}>
      <img
        alt={props.img.alt}
        src={props.img.img}
        srcSet={`${props.img.img2x} 2x, ${props.img.img3x} 3x`}
        className={styles.sceneItemImg}
      />

      <div className={styles.sceneItemDescriptionContainer}>
        <div className={styles.sceneItemDescriptionTitle}>
          <FormattedMessage id={props.title} />
        </div>
        {
          props.items.map((item, index) => {
            return (
              <SceneDescriptionItem key={index} text={item} />
            );
          })
        }
      </div>
    </div>
  );
}

export default IndexSceneItem;

import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';

function SceneDescriptionItem(props) {
  return (
    <div className={styles.sceneDescriptionItemContainer}>
      <div className={styles.sceneDescriptionItemIcon} />
      <div className={styles.sceneDescriptionItemText}>
        <FormattedMessage id={props.text} />
      </div>
    </div>
  );
}

export default SceneDescriptionItem;

import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';

function DescriptionItem(props) {
  return (
    <div className={styles.descriptionItemContainer}>
      <div className={styles.descriptionItemIcon} />
      <div className={styles.descriptionItemText}>
        <FormattedMessage id={props.text} />
      </div>
    </div>
  );
}

export default DescriptionItem;

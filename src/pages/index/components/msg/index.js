import styles from './index.css';
import iconSymbol from '@/assets/icon-symbol.png';
import iconSymbol2x from '@/assets/icon-symbol@2x.png';
import iconSymbol3x from '@/assets/icon-symbol@3x.png';
import { FormattedMessage } from 'umi-plugin-locale';

function IndexMsg() {
  return (
    <div className={`${styles.msgContainer} wow fadeInDown`} data-wow-duration='2s'>
      <img
        alt={'icon-symbol'}
        src={iconSymbol}
        srcSet={`${iconSymbol2x} 2x, ${iconSymbol3x} 3x`}
        className={styles.msgIcon}
      />

      <div className={styles.msgText}>
        <FormattedMessage id={'msg'} />
      </div>
    </div>
  );
}

export default IndexMsg;

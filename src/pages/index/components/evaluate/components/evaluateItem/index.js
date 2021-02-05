import styles from './index.css';
import iconSymbol from '@/assets/icon-symbol.png';
import iconSymbol2x from '@/assets/icon-symbol@2x.png';
import iconSymbol3x from '@/assets/icon-symbol@3x.png';
import { FormattedMessage, getLocale } from 'umi-plugin-locale';

function EvaluateItem(props) {
  return (
    <div className={styles.evaluateItemContainer}>
      <img
        alt={'icon-symbol'}
        src={iconSymbol}
        srcSet={`${iconSymbol2x} 2x, ${iconSymbol3x} 3x`}
        className={styles.evaluateItemIcon}
      />

      <div className={styles.evaluateItemContent}>
        <FormattedMessage id={props.content} />
      </div>

      <div className={styles.evaluateItemBottomContainer}>
        <div className={styles.evaluateItemCompany}>
          {
            getLocale() === 'en-US' ? (
              <span />
            ) : (
              <FormattedMessage id={props.company} />
            )
          }
        </div>

        <img
          alt={props.img.alt}
          src={props.img.img}
          srcSet={`${props.img.img2x} 2x, ${props.img.img3x} 3x`}
          className={styles.evaluateItemCompanyIcon}
        />
      </div>
    </div>
  );
}

export default EvaluateItem;

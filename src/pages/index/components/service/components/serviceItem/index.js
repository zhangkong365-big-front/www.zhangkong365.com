import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';

function IndexServiceItem(props) {
  return (
    <div className={styles.serviceCardItemContainer}>
      <img
        alt={props.img.alt}
        src={props.img.img}
        srcSet={`${props.img.img2x} 2x, ${props.img.img3x} 3x`}
        className={styles.serviceItemImg}
      />

      <div className={styles.serviceCardItemTextWrapper}>
        <div className={styles.serviceCardItemLargeText}>
          <FormattedMessage id={props.largeText} />
        </div>

        <div className={styles.serviceCardItemTextContainer}>
          {
            props.texts.map((item, index) => {
              return (
                <div key={index} className={styles.serviceCardItemText}>
                  <FormattedMessage id={item} />
                </div>
              );
            })
          }
        </div>

        {/* 手机版 */}
        <div className={styles.serviceSmallCardItemTextContainer}>
          <div className={styles.serviceSmallCardItemText}>
            <FormattedMessage id={props.mobileText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexServiceItem;

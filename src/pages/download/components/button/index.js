import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';

function DownloadButton(props) {
  return (
    <div
      className={`${props.className} ${styles.downloadButtonContainer}`}
      style={{
        width: props.width || 320,
        height: props.height || 60,
        borderRadius: props.borderRadius || 30,
        border: props.border || 'solid 1px #1a7aff',
        backgroundColor: props.backgroundColor || '#ffffff',
      }}
      onClick={props.onClick}
    >
      <img
        className={props.iconClassName}
        src={props.icon}
        alt='icon'
        style={{
          width: props.iconWidth || 24,
          height: props.iconHeight || 24,
        }}
      />
      <span
        className={`${props.nameClassName} ${styles.downloadName}`}
        style={{
          marginLeft: props.nameMarginLeft || 10,
          fontSize: props.nameFontSize || 24,
          color: props.nameColor || '#1a7aff',
          fontWeight: props.nameFontWeight || 'normal',
        }}
      >
        <FormattedMessage id={props.name} />
      </span>
    </div>
  );
}

export default DownloadButton;

import styles from './index.css';
import BasicHeaderLogo from './components/logo';
import BasicHeaderActions from './components/actions';
import BasicHeaderLanguages from './components/languages';
import DashboardButton from './components/dashboard';

function BasicHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        {/* logo */}
        <BasicHeaderLogo />

        <div className={styles.headerRightContainer}>
          {/* 操作 */}
          <BasicHeaderActions />

          {/* 语言 */}
          <BasicHeaderLanguages />
          <DashboardButton />
        </div>

        {/* 手机版 */}
        <div className={styles.headerRightSmallContainer}>
          {/* 语言 */}
          <BasicHeaderLanguages />

          {/* 操作 */}
          <BasicHeaderActions />
        </div>
      </div>
    </div>
  );
}

export default BasicHeader;

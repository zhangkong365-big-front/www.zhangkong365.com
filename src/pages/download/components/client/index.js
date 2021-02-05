import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';
import DownloadButton from '../button/index';
import img from '../../assets/img';

function downloadWindows() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/%E6%8E%8C%E6%8E%A7%E5%90%8C%E6%AD%A5%E5%8A%A9%E6%89%8B%20Setup%201.0.8.exe');
}

function downloadWindowsx86() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/%E6%8E%8C%E6%8E%A7%E5%90%8C%E6%AD%A5%E5%8A%A9%E6%89%8B%20Setup%201.0.8%20x86.exe');
}

function downloadMac() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/%E6%8E%8C%E6%8E%A7%E5%90%8C%E6%AD%A5%E5%8A%A9%E6%89%8B-1.0.8.pkg');
}

function downloadIos() {
  window.open('https://apps.apple.com/cn/app/%E6%8E%8C%E6%8E%A7/id1361527756');
}

function downloadAndroid() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/thingworks_v2.5.9.apk');
}

function downloadAndroidOld() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/thingworks_v2.4.2.apk');
}

function downloadAndroidTv() {
  window.open('https://zhangkongclient.oss-cn-shanghai.aliyuncs.com/thingworks_tv_v1.9.8.apk');
}

function DownloadClient() {
  return (
    <div className={styles.clientContainer}>
      <section className={styles.jarvisConnector}>
        <div className={styles.clientWrapper}>
          <div className={styles.clientTitleContainer}>
            <div className={styles.clientTitle}>
              <FormattedMessage id={'jarvisConnector'} />
            </div>
            <div className={styles.clientConnectorSubTitle}>
              <FormattedMessage id={'jarvisConnectorSubTitle'} />
            </div>
          </div>
          <div className={styles.jarvisConnectorIntro}>
            <div className={styles.jarvisConnectorIntroItem}>
              <div className={styles.imgWrapper}>
                <img className={styles.stepImg} src={img.download} alt="下载" />
              </div>
              <div className={styles.stepTitle}>
                <FormattedMessage id={'jarvisConnectorText1'} />
              </div>
            </div>
            <div className={styles.arrowWrapper}>
              <img className={styles.arrowImg} src={img.arrow} alt="arrow" />
            </div>
            <div className={styles.jarvisConnectorIntroItem}>
              <div className={styles.imgWrapper}>
                <img className={styles.stepImg} src={img.signIn} alt="登录" />
              </div>
              <div className={styles.stepTitle}>
                <FormattedMessage id={'jarvisConnectorText2'} />
              </div>
            </div>
            <div className={styles.arrowWrapper}>
              <img className={styles.arrowImg} src={img.arrow} alt="arrow" />
            </div>
            <div className={styles.jarvisConnectorIntroItem}>
              <div className={styles.imgWrapper}>
                <img className={styles.stepImg} src={img.synchronize} alt="同步" />
              </div>
              <div className={styles.stepTitle}>
                <FormattedMessage id={'jarvisConnectorText3'} />
              </div>
            </div>
            <div className={styles.arrowWrapper}>
              <img className={styles.arrowImg} src={img.arrow} alt="arrow" />
            </div>
            <div className={styles.jarvisConnectorIntroItem}>
              <div className={styles.imgWrapper}>
                <img className={styles.stepImg} src={img.view} alt="查看" />
              </div>
              <div className={styles.stepTitle}>
                <FormattedMessage id={'jarvisConnectorText4'} />
              </div>
            </div>
          </div>
          <div className={styles.jarvisConnectorDownload}>
            {/* windows */}
            <div className={styles.downloadItem}>
              <DownloadButton
                icon={img.windowsIcon}
                name={'downloadBtn'}
                className={styles.downloadItemAction}
                iconClassName={styles.downloadItemActionIcon}
                nameClassName={styles.downloadItemActionName}
                onClick={() => downloadWindows()}
              />
              <p className={styles.jarvisConnectorEnv}>
                <FormattedMessage id={'windowsEnv'} /> <br/>
                <FormattedMessage id={'windowsVersion'} /> <br/>
                <FormattedMessage id={'windowsUpdateTime'} /> <br/>
              </p>
            </div>
            {/* windows x86 */}
            <div className={styles.downloadItem}>
              <DownloadButton
                icon={img.windowsIcon}
                name={'downloadBtn'}
                className={styles.downloadItemAction}
                iconClassName={styles.downloadItemActionIcon}
                nameClassName={styles.downloadItemActionName}
                onClick={() => downloadWindowsx86()}
              />
              <p className={styles.jarvisConnectorEnv}>
                <FormattedMessage id={'windowsx86Env'} /> <br/>
                <FormattedMessage id={'windowsVersion'} /> <br/>
                <FormattedMessage id={'windowsUpdateTime'} /> <br/>
              </p>
            </div>
            {/* mac */}
            <div className={styles.downloadItem}>
              <DownloadButton
                icon={img.macIcon}
                iconWidth={23.9}
                iconHeight={29.4}
                name={'downloadBtn'}
                className={styles.downloadItemAction}
                iconClassName={styles.downloadItemActionIcon}
                nameClassName={styles.downloadItemActionName}
                onClick={() => downloadMac()}
              />
              <p className={styles.jarvisConnectorEnv}>
                <FormattedMessage id={'macEnv'} /> <br/>
                <FormattedMessage id={'macVersion'} /> <br/>
                <FormattedMessage id={'macUpdateTime'} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionApp}>
        <div className={styles.clientWrapper}>
          <div className={styles.clientTitleContainer}>
            <div className={styles.clientTitle}>
              <FormattedMessage id={'clientTitle'} />
            </div>

            <div className={styles.clientSubTitle}>
              <FormattedMessage id={'clientSubTitle'} />
            </div>
          </div>

          <div className={styles.clientCategoryContainer}>
            {/* 手机App下载 */}
            <div className={styles.clientCategoryTitle}>
              <FormattedMessage id={'clientCategoryTitle1'} />
            </div>

            <div className={styles.clientCategoryItemContainer}>
              {/* ios */}
              <div className={styles.clientCategoryItemCard}>
                <div className={styles.clientCategoryItemCardContent}>
                  <div className={styles.clientCategoryItemTitle}>
                    <FormattedMessage id={'clientCategoryTitle11'} />
                  </div>

                  <div className={styles.clientCategoryItemWrapper}>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory111'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory112'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory113'} />
                    </div>

                    <DownloadButton
                      width={200}
                      height={50}
                      borderRadius={25}
                      icon={img.macIcon}
                      iconWidth={16.7}
                      iconHeight={20.6}
                      name={'downloadBtn'}
                      nameMarginLeft={7}
                      nameFontSize={18}
                      nameFontWeight={600}
                      className={styles.clientCategoryItemAction}
                      iconClassName={styles.clientCategoryItemActionIcon}
                      nameClassName={styles.clientCategoryItemActionName}
                      onClick={() => downloadIos()}
                    />
                  </div>
                </div>
              </div>

              {/* android */}
              <div className={styles.clientCategoryItemCard}>
                <div className={styles.clientCategoryItemCardContent}>
                  <div className={styles.clientCategoryItemTitle}>
                    <FormattedMessage id={'clientCategoryTitle12'} />
                  </div>

                  <div className={styles.clientCategoryItemWrapper}>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory121'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory122'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory123'} />
                    </div>

                    <DownloadButton
                      width={200}
                      height={50}
                      borderRadius={25}
                      icon={img.androidIcon}
                      iconWidth={16.7}
                      iconHeight={20.6}
                      name={'downloadBtn'}
                      nameMarginLeft={7}
                      nameFontSize={18}
                      nameFontWeight={600}
                      className={styles.clientCategoryItemAction}
                      iconClassName={styles.clientCategoryItemActionIcon}
                      onClick={() => downloadAndroid()}
                    />
                  </div>
                </div>
              </div>

              {/* android 老版本 */}
              <div className={styles.clientCategoryItemCard}>
                <div className={styles.clientCategoryItemCardContent}>
                  <div className={styles.clientCategoryItemTitle}>
                    <FormattedMessage id={'clientCategoryTitle13'} />
                  </div>

                  <div className={styles.clientCategoryItemWrapper}>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory131'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory132'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory133'} />
                    </div>

                    <DownloadButton
                      width={200}
                      height={50}
                      borderRadius={25}
                      icon={img.androidIcon}
                      iconWidth={16.7}
                      iconHeight={20.6}
                      name={'downloadBtn'}
                      nameMarginLeft={7}
                      nameFontSize={18}
                      nameFontWeight={600}
                      className={styles.clientCategoryItemAction}
                      iconClassName={styles.clientCategoryItemActionIcon}
                      onClick={() => downloadAndroidOld()}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 电视App下载 */}
            <div className={styles.clientCategoryTitle}>
              <FormattedMessage id={'clientCategoryTitle2'} />
            </div>

            <div className={styles.clientCategoryItemContainer}>
              {/* android tv */}
              <div className={styles.clientCategoryItemCard}>
                <div className={styles.clientCategoryItemCardContent}>
                  <div className={styles.clientCategoryItemTitle}>
                    <FormattedMessage id={'clientCategoryTitle21'} />
                  </div>

                  <div className={styles.clientCategoryItemWrapper}>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory211'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory212'} />
                    </div>
                    <div className={styles.clientCategoryItem}>
                      <FormattedMessage id={'clientCategory213'} />
                    </div>

                    <DownloadButton
                      width={200}
                      height={50}
                      borderRadius={25}
                      icon={img.androidIcon}
                      iconWidth={16.7}
                      iconHeight={20.6}
                      name={'downloadBtn'}
                      nameMarginLeft={7}
                      nameFontSize={18}
                      nameFontWeight={600}
                      className={styles.clientCategoryItemAction}
                      iconClassName={styles.clientCategoryItemActionIcon}
                      onClick={() => downloadAndroidTv()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DownloadClient;

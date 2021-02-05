import React, {Component} from 'react';
import styles from './index.css';
import { FormattedMessage, getLocale } from 'umi-plugin-locale';

import ConstantUtil from '../../../../utils/constant';

class IndexTrial extends Component{
  state = {
    isMobile: false
  }

  componentDidMount() {
    const isMobile = () => {
      return window.innerWidth <= 768
    }
    window.addEventListener('resize', () => {
      this.setState({isMobile: isMobile()})
    })
  }

  calculateFrameSize() {
    const isMobile = () => {
      return window.innerWidth <= 768
    }
    let iframeHeight = 687;
    let hideTipsHeight = 155;
    if(isMobile()) {
      iframeHeight = 820;
      hideTipsHeight = 120;
    }
    return {iframeHeight, hideTipsHeight}
  }

  render() {
    const {iframeHeight} =this.calculateFrameSize();
    const locale = getLocale();
    return (
      <div id={'trial'} className={`${styles.trialContainer} wow fadeInDown`} data-wow-duration='2s'>
        <div className={styles.trialTitle}>
          <FormattedMessage id={'trialTitle'} />
        </div>
        <iframe
          src={ConstantUtil.TRIAL_IFRAME_URL[locale]}
          title="试用表单"
          width="100%"
          frameBorder="0"
          // allowTransparency="true"
          height={iframeHeight}>
        </iframe>
      </div>
    );
  }



}

export default IndexTrial;

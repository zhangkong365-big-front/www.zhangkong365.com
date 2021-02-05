import React from 'react';
import styles from './index.css';

export default class Success extends React.Component {
  render() {
    return (
      <div className={styles.successContainer}>
        <div className={styles.card}>
          <svg height={100} width={100} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g fill="#71b300">
              <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"/>
            </g>
          </svg>
          <h1 className={styles.cardH1}>提交成功</h1>
          <p className={styles.cardP}> 感谢您的参与，我们已经收到您的试用请求 <br/> 我们会尽快联系您!</p>
          <a href="/">返回首页</a>
        </div>
      </div>
    )
  }

}

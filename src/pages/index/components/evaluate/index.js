import styles from './index.css';
import { FormattedMessage } from 'umi-plugin-locale';
import { Row, Col } from 'antd';
import EvaluateItem from './components/evaluateItem';
import logo1Case from './assets/logo-1-case.png';
import logo1Case2x from './assets/logo-1-case@2x.png';
import logo1Case3x from './assets/logo-1-case@3x.png';
import logo2Case from './assets/logo-2-case.png';
import logo2Case2x from './assets/logo-2-case@2x.png';
import logo2Case3x from './assets/logo-2-case@3x.png';

const evaluates = [
  {
    content: 'evaluateItem1Content',
    company: 'evaluateItem1Company',
    img: {
      alt: 'logo-1-case',
      img: logo1Case,
      img2x: logo1Case2x,
      img3x: logo1Case3x,
    },
  },
  {
    content: 'evaluateItem2Content',
    company: 'evaluateItem2Company',
    img: {
      alt: 'logo-2-case',
      img: logo2Case,
      img2x: logo2Case2x,
      img3x: logo2Case3x,
    },
  },
];

function IndexEvaluate() {
  return (
    <div id={'case'} className={`${styles.evaluateContainer} wow fadeInUp`} data-wow-duration='2s'>
      <div className={styles.evaluateTitle}>
        <FormattedMessage id={'evaluateTitle'} />
      </div>

      <Row className={styles.evaluateContentContainer}>
        {
          evaluates.map((item, index) => {
            return (
              <Col
                key={index}
                span={12}
                className={styles.evaluateContentItemContainer}
              >
                <EvaluateItem
                  content={item.content}
                  company={item.company}
                  img={item.img}
                />
              </Col>
            );
          })
        }
      </Row>

      {/* 手机版 */}
      <Row className={styles.evaluateSmallContentContainer}>
        {
          evaluates.map((item, index) => {
            return (
              <Col
                key={index}
                span={24}
                className={styles.evaluateSmallContentItemContainer}
              >
                <EvaluateItem
                  content={item.content}
                  company={item.company}
                  img={item.img}
                />
              </Col>
            );
          })
        }
      </Row>
    </div>
  );
}

export default IndexEvaluate;

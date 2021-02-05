import styles from './index.css';
import { Menu, Dropdown, Button, Icon } from 'antd';
import { setLocale, getLocale } from 'umi-plugin-locale';

const languages = [
  {
    name: '简体中文',
    locale: 'zh-CN',
  },
  {
    name: 'English',
    locale: 'en-US',
  },
];

function changeLanguage(item) {
  setLocale(item.locale);
  return false;
}

const menu = (
  <Menu>
    {
      languages.map((item, index) => {
        return (
          <Menu.Item key={index}>
            {/* eslint-disable-next-line */}
            <a onClick={() => changeLanguage(item)}>
              {item.name}
              &nbsp;&nbsp;
              {
                getLocale() === item.locale ? (
                  <Icon type="check" />
                ) : (
                  ''
                )
              }
            </a>
          </Menu.Item>
        );
      })
    }
  </Menu>
);

function showLanguageName() {
  return languages.filter(item => item.locale === getLocale())[0].name;
}

function BasicHeaderLanguages() {
  return (
    <div className={styles.headerLanguagesContainer}>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>{showLanguageName()} <Icon type="down" /></Button>
      </Dropdown>
    </div>
  );
}

export default BasicHeaderLanguages;

import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import styles from './index.css';
import consoleImg from './assets/console@2x.png';
import desktopImg from './assets/kanban@2x.png';
import { FormattedMessage } from 'umi-plugin-locale';

const LinkItem = ({ id, icon, name, link }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <div className={styles.row}>
        <img width="30" src={icon} alt={name} />
        <span className={styles.ml1}>
          <FormattedMessage id={id} />
        </span>
      </div>
    </a>
  );
};

const DashboardButton = () => {
  const menu = (
    <Menu style={{ width: 120 }}>
      <Menu.Item key="desktop">
        <LinkItem
          id="desktop"
          name="看板"
          icon={desktopImg}
          link={'https://console.zhangkong365.com/desktop'}
        />
      </Menu.Item>
      <Menu.Item>
        <LinkItem
          id="console"
          name="掌控console"
          icon={consoleImg}
          link={'https://console.zhangkong365.com/sharepoints'}
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.dashboardButtonContainer}>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button type="primary">
          <FormattedMessage id="dashboard" />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DashboardButton;

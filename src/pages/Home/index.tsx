import React from 'react';
import styles from './index.less';

const logo = require('../../assets/Ivy.png');

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img alt="logo" className={styles.logo} src={logo} />
          <span className={styles.title}>Ivy的Demo</span>
        </div>
      </div>
      <div className={styles.desc}>umi + React + Ant Design Pro</div>
    </div>
  );
}

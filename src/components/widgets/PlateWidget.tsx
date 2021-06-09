import * as React from 'react';
import * as styles from '../../styles/modules/plate-widget.module.scss'

export function PlateWidget () {
  return (
    <span className={styles.plate}>
      <span className={styles.topScrews}>
        <span className={styles.bottomScrews}></span>
      </span>
    </span>
  );
}  
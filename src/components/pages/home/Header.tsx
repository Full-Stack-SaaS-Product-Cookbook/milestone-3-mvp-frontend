import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import * as styles from '../../../styles/modules/header.module.scss'
import { PlateWidget } from '../../widgets/PlateWidget';

export function Header () {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1 className={`my-5 ${styles.title}`}>
        <span className="text-primary">Redux</span>
        <span className={`text-light mt-4 mt-md-0 ${styles.plateText}`}>Plate<PlateWidget/></span>
      </h1>
      <h2 className={`my-3 ${styles.subtitle}`}>{data.site.siteMetadata.description}</h2>
    </header>
  );
}

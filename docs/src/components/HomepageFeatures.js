import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simple to use',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TDGDP has been designed to be easy to use and clear to understand from a glance.
      </>
    ),
  },
  {
    title: 'Skip the hard part',
    // Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sifting though and parsing through the data is a tedious process. TDGDP is designed to solve this problem by
        providing a simple colaborative tool to assist you in making your tool without the need to spend time on the
        hard part.
      </>
    ),
  },
  {
    title: 'Extensible by design',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TDGDP is fully open source and is designed to be extensible by anyone who wants to contribute to the project.
        The more hands on the project the better.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {
        /* <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div> */
      }
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}

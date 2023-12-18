import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vega Platform Documentation',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Comprehensive guides and resources for navigating our SaaS platform. Dive deep into features, integrations, and best practices. Empower your success with up-to-date documentation.
      </>
    ),
      link: "/docs/intro"
  },
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
       Detailed API docs for our SaaS platform. Explore endpoints, request/response structures, and integration examples. Streamline your integration with precise instructions.
     
      </>
    ),
      link: "https://api.vegacloud.io/docs"
  },
  {
    title: 'Cloud Provider Integration Documentation',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Step-by-step guides to configuring cloud provider account access for all product SKUs.

         </>
    ),
      link: "/docs/providers/overview"
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (

    <div className={clsx('col col--4')}>
        <a href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        </a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

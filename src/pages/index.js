import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.container}>
        <h1 className="hero__title">TEE POOL</h1>
        <p className="hero__subtitle">Trusted Execution Environment</p>
        <p>Open Data Chia Farming Pool</p>
        <p>Visit our Github page for build instructions or download binary for Linux or Windows</p>
        <div className={styles.state}>
        fsfdsf
        </div>
      </div>
     
    </Layout>
  );
}
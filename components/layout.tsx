import React from 'react';
import Head from 'next/head';
import ContentNav from './content-header';
import styles from '../styles/layout.module.css';

type LayoutProps = {
    meta: {
        title: string;
    };
    children: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.postContainer}>
            <Head>
                <title>forEllie: {props.meta.title}</title>
                <meta name='description' content='An ode to my love' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.post}>
                <ContentNav title={props.meta.title} />
                {props.children}
            </div>
        </div>
    );
};

export default Layout;

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
        <main className={styles.post}>
            <Head>
                <title>forEllie: {props.meta.title}</title>
                <meta name='description' content='An ode to my love' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <ContentNav title={props.meta.title} />
            {props.children}
        </main>
    );
};

export default Layout;

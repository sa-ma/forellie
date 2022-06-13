import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { NextPage } from 'next';

class MyDocument extends Document<NextPage> {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

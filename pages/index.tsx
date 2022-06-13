import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Draggable from 'react-draggable';

type UIType = {
    deltaX: number;
    deltaY: number;
};
class Home extends React.Component<NextPage> {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0,
            y: 0,
        },
    };
    handleDrag = (e: Event, ui: UIType) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            },
        });
    };

    onStart = () => {
        let modifiedActiveDrags = this.state.activeDrags;
        this.setState({ activeDrags: ++modifiedActiveDrags });
    };

    onStop = () => {
        let modifiedActiveDrags = this.state.activeDrags;
        this.setState({ activeDrags: --modifiedActiveDrags });
    };
    render(): React.ReactNode {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <div className='container min-h-screen p-6'>
                <Head>
                    <title>forEllie</title>
                    <meta name='description' content='An ode to my love' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <Header />

                <main className='grid place-items-center h-96'>
                    <Draggable {...dragHandlers}>
                        <div className='box'>
                            <button draggable={false} className='animate-bounce' onClick={() => null}>
                                <Image src='/folder.png' alt='folder' width={64} height={64} />
                            </button>
                        </div>
                    </Draggable>
                </main>

                <Footer />
            </div>
        );
    }
}

export default Home;

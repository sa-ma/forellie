import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Draggable from 'react-draggable';
import { useRouter } from 'next/router';

type DraggableEventHandler = (e: Event, data: DraggableData) => void | false;
type DraggableData = {
    node: HTMLElement;
    // lastX + deltaX === x
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
};
type handleNavProps = {
    stopPropagation: () => void;
};

const Home = (props: NextPage) => {
    const nodeRef = React.useRef(null);
    const router = useRouter();

    const [isDragging, setIsDragging] = useState<boolean>(false);

    const eventControl: DraggableEventHandler = (event) => {
        if (['mousemove', 'touchmove'].includes(event.type)) {
            setIsDragging(true);
        }

        if (['mouseup', 'touchend'].includes(event.type)) {
            setTimeout(() => {
                setIsDragging(false);
            }, 100);
        }
    };

    const handleNavigation = (event: handleNavProps, location: string) => {
        if (isDragging) {
            event.stopPropagation();
            return;
        }
        router.push(location);
    };

    return (
        <div className='container min-h-screen p-6'>
            <Head>
                <title>forEllie</title>
                <meta name='description' content='An ode to my love' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />

            <main className='grid place-items-center h-96'>
                <Draggable nodeRef={nodeRef} onDrag={eventControl} onStop={eventControl}>
                    <button
                        draggable={false}
                        ref={nodeRef}
                        onClick={(event) => handleNavigation(event, '/posts/birthday')}
                    >
                        <Image draggable={false} src='/folder.png' alt='folder' width={64} height={64} />
                    </button>
                </Draggable>
            </main>

            <Footer />
        </div>
    );
};
export default Home;

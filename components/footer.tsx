import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className='text-center text-sm absolute bottom-0 left-0 w-full p-6'>
            An ode to the one I love. Design inspired by{' '}
            <Link href='https://oklama.com/'>
                <a target='_blank' rel='noopener noreferrer' className='text-pink-600'>
                    Oklama
                </a>
            </Link>
        </footer>
    );
};

export default Footer;

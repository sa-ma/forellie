import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='text-center absolute bottom-0 left-0 w-full p-6'>
            An ode to the one I love. Design inspired by{' '}
            <a href='https://oklama.com/' target='_blank' rel='noopener noreferrer'>
                Oklama
            </a>
        </footer>
    );
};

export default Footer;

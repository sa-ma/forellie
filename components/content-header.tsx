import React from 'react';
import Link from 'next/link';

type ContentNavType = {
    title: string;
};
const ContentNav = ({ title }: ContentNavType) => {
    return (
        <header className='w-full mb flex'>
            <Link href='/'>
                <a className='pr-2'>←</a>
            </Link>
            <h1 className='font-bold'>{title}</h1>
        </header>
    );
};

export default ContentNav;

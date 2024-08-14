import React from 'react';

export default function User({user:{photoURL,displayName}}) {
    return (
        <div className='flex items-center'>
            <img className='w-8 h-8 rounded-full ' src={photoURL} alt={displayName} referrerPolicy='no-referrer'/>
            <span className='hidden md:block ml-2'>{displayName}</span>
        </div>
    );
}


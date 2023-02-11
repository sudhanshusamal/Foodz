"use client";

import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-5 px-4 bg-slate-800 '>
            <div>
                <Link href='https://github.com/sudhanshusamal'>
                    <h1 className='text-red-600  text-1xl text-center'>Made with Love by Sudhanshu Samal</h1>
                </Link>
            </div>
        </div>
    )
}

export default Footer
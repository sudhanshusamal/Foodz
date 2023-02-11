"use client"; 

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-4 bg-slate-800 flex items-center justify-between'>
        <div>
            <Link href='/'>
                <h1 className='text-red-600 font-bold text-5xl text-center'>Foodz</h1>
            </Link>
        </div>
    </div>
  )
}

export default Header
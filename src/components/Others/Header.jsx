import React from 'react'

function Header() {
    return (
        <div className='flex items-end justify-between'>
            <h1
                className='text-2xl font-medium'>
                Hello <br />
                <span
                    className='text-3xl font-semibold'>
                    Rajvardhan 👋
                </span>
            </h1>
            <button
                className='bg-red-500 px-5 py-3 text-lg font-medium rounded-sm'
            >
                Log Out
            </button>
        </div>
    )
}

export default Header

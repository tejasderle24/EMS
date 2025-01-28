import React from 'react'

function CreateTask() {
    return (
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
                <form className='flex flex-wrap w-full items-start justify-between  '>

                    <div className='w-1/2'>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Tast Title</h3>
                        <input
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        type="text" placeholder='Enter the Title' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                         type="date" />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        type="text" placeholder='Employee Name' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Catagory</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                         type="text" placeholder='Design Dev etc' />
                    </div>
                    </div>


                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='w-full  text-sm py-1 px-2 h-44 rounded outline-none bg-transparent border-[1px] border-gray-400'
                         name="" id=""></textarea>
                    </div>

                    
                    <button
                    className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
                    >Create Task</button>
                </form>
            </div>
    )
}

export default CreateTask

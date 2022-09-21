import React from 'react'

function Nav() {
  return (
    <div>
      <div className='row mb-32'>
        <h4 className='mb-4'>Base Nav</h4>
        <div className='w-full bg-slate-200 pt-[15px] pb-32'>
          <ul className='list-none inline w-full'>
            <li className='inline px-5 py-4 bg-slate-700 mr-1 cursor-pointer'>Active</li>
            <li className='inline px-5 py-4 bg-slate-400 mr-1 cursor-pointer'>Link 1</li>
            <li className='inline px-5 py-4 bg-slate-400 mr-1 cursor-pointer'>Link 2</li>
            <li className='inline px-5 py-4 bg-slate-300 mr-1'>Inactive</li>
          </ul>
        </div>
      </div>
      <div className='row mb-32'>
        <h4 className='mb-4'>Pills</h4>
        <div className='w-full bg-slate-200 pt-[15px] pb-32'>
          <ul className='list-none inline w-full'>
            <li className='inline px-5 py-3 bg-slate-700 mr-1 cursor-pointer rounded-lg ml-1 font-semibold'>Active</li>
            <li className='inline px-5 py-4 bg-slate-200 mr-1 cursor-pointer text-slate-900 font-semibold'>Link 1</li>
            <li className='inline px-5 py-4 bg-slate-200 mr-1 cursor-pointer text-slate-900 font-semibold'>Link 2</li>
            <li className='inline px-5 py-4 bg-slate-200 mr-1 cursor-pointer text-slate-900 font-semibold'>Link3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
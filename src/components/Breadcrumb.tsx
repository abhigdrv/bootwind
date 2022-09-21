import React from 'react'

function Breadcrumb() {
  return (
    <div>
      Breadcrumb
      <ol className='bg-white p-4 rounded-lg mt-4'>
        <li className='inline-flex pl-1'>
          <a href='#home' className='text-slate-900 hover:text-slate-700'>Home</a>
        </li>
        <li className='inline-flex pl-1'>
          <a href='#library' className='text-slate-900 hover:text-slate-700 before:content-["_/"]'> Library</a>
        </li>
        <li className='inline-flex pl-1'>
          <span className='text-slate-900 hover:text-slate-700 before:content-["_/"]'> Data</span>
        </li>
      </ol>
    </div>
  )
}

export default Breadcrumb
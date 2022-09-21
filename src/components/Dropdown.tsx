import React from 'react'

function Dropdown() {
  return (
    <div className='w-24'>
      <label htmlFor="dropdown">
        <input type="checkbox" id='dropdown' className='hidden peer'/>
        <span className='bg-slate-50 px-3 py-1 text-slate-800 rounded-md flex mb-2 pl-2 cursor-pointer'>Dropdown
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <ul className='list-none bg-slate-100 w-36 text-slate-500 rounded-md p-2 hidden peer-checked:block'>
          <li className='cursor-pointer'>Dropdown Item 1</li>
          <li className='cursor-pointer'>Dropdown Item 2</li>
          <li className='cursor-pointer'>Dropdown Item 3</li>
        </ul>
      </label>
    </div>
  )
}

export default Dropdown
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from '../variables/Menu';

export default function Sidebar() {
  const pathname = useLocation().pathname;
  return (
    <div className='p-4 rounded-lg shadow-sm bg-slate-800 shadow-slate-100 col-span-2 min-h-[98vh] relative bg-[url("./../src/assets/bg.jpg")] bg-opacity-25'>
      <div className="p-2 font-semibold text-xl mb-4">
        DashboardPro
      </div>
      <div className='max-h-[88vh] overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-900 scrollbar-thumb-rounded-full'>
        {Menu.map(item => 
        <div key={item.title} className="pr-4">
          <div className={`${pathname === item.path ? 'bg-white rounded-lg p-2 text-black font-semibold mb-3 shadow-sm shadow-slate-900' : 'bg-slate-900 rounded-lg p-2 text-slate-300 font-semibold mb-3 shadow-sm shadow-slate-100'}`}>
            <Link to={item.path}>{item.title}</Link>
          </div>
          {item.children && item.children.map(child =>
            <div key={child.title} className={`${(pathname === child.path) ? 'bg-white rounded-lg p-2 text-black font-semibold mb-3 ml-3 shadow-sm shadow-slate-900' : 'bg-slate-900 rounded-lg p-2 text-slate-300 font-semibold mb-3 ml-4 shadow-sm shadow-slate-100'} ${(pathname.split('/')[1] === item.path.split('/')[1] || pathname.split('/')[2] === child.path.split('/')[1]) ? '':'hidden'}`}>
              <Link to={child.path}>{child.title}</Link>
            </div>
          )}
        </div>
        )}
      </div>

      <div className="pl-4 font-semibold mb-3 inset-x-0 bottom-0 absolute ">
        Made by DashPro
      </div>
    </div>
  )
}

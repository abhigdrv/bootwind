import React from 'react'

function Card(props:any) {
  return (
    <div className="2xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 p-4 rounded-lg text-slate-300 bg-slate-900 h-[200px] shadow-sm shadow-slate-100 bg-[url('./../src/assets/bg.jpg')] bg-opacity-25 bg-center">
          <svg className="w-6 h-6 float-right inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>{props.name}
          <h1 className='text-gray text-5xl font-semibold pt-10'>{props.value}</h1>
    </div>
  )
}

export default Card
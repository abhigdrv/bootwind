import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <Card name="Featured Product" icon="" value="126.00"/>
        <Card name="Hot Selling Product" icon="" value="245.00"/>
        <Card name="Relevant Product" icon="" value="876.00"/>
        <Card name="Top Rated Product" icon="" value="426.00"/>
      </div>

      <div className='grid grid-cols-12 gap-4 mt-6'>
        <div className="col-span-8 p-4 rounded-lg text-slate-300 bg-slate-900 h-[200px] shadow-sm shadow-slate-100">
          <svg className="w-6 h-6 float-right inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>Featured Product
          <h1 className='text-gray text-5xl font-semibold pt-10'>126.00</h1>
        </div>
        <div className="col-span-4 p-4 rounded-lg text-slate-300 bg-slate-900 h-[200px]  shadow-sm shadow-slate-100">
          <svg className="w-6 h-6  float-right inline-flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>Hot Selling Product
          <h1 className='text-gray text-5xl font-semibold pt-10'>245.00</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
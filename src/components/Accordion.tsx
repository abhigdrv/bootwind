import React from 'react'

function Accordion() {
  return (
    <div>
      <div>
        <h3 className='mb-4 text-3xl'>Accordion</h3>
        <div className="accordion">
          <div className='shadow-sm shadow-white p-3 bg-slate-900'>
            <div className='border-2 p-2'>
              <a href="#p1" className='w-full'>Accordion Item #1 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex float-right"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg>
              </a>
            </div>
            <div id="p1" className='hidden target:block'>
            Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.
            </div>
          </div>
          <div className='shadow-sm shadow-white p-3 bg-slate-900'>
            <div className='border-2 p-2'>
              <a href="#p2" className='w-full'>Accordion Item #2 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex float-right"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg></a>
            </div>
            <div id="p2" className='hidden target:block'>
             Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content.This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. 
            </div>
          </div>
          <div className='shadow-sm shadow-white p-3 bg-slate-900'>
            <div className='border-2 p-2'>
              <a href="#p3" className='w-full'>Accordion Item #3 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex float-right"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg></a>
            </div>
            <div id="p3" className='hidden target:block'>
             Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. This is the first item's accordion body.Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.content. 
            </div>
          </div>
          <div className='shadow-sm shadow-white p-3 bg-slate-900'>
            <div className='border-2 p-2'>
              <a href="#p4" className='w-full'>Accordion Item #4 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex float-right"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" /></svg></a>
            </div>
            <div id="p4" className='hidden target:block'>
             Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual Placeholder content for this accordion, which is intended to demonstrate the class. 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
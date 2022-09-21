import React from 'react'

function Popover() {
  return (
    <div>
      <div>
        <h3 className='mb-4'>Popover</h3>
        <div>
          <div className='flex'>
            <span className='bg-slate-500 h-fit p-2 rounded-lg peer'>Hover To toggle popover</span>
            <div className='hidden peer-hover:block mt-3'>
              <div className='ml-3 bg-slate-100'>
                <div className='w-56 bg-slate-100 rounded-lg p-0 text-slate-900'>
                  <div className='flex bg-slate-500 py-3 text-slate-100 pl-3'>Popover Title</div>
                  <div className='flex p-3'>And here's some amazing content. It's very engaging. Right?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popover
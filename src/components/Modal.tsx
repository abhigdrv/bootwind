import React from 'react'

function Modal() {
  return (
    <div>
      <label htmlFor="modal">
        <input type="checkbox" id='modal' className='hidden peer'/>
        <div className='bg-slate-50 px-2 py-3 text-slate-800 rounded-md flex mb-2 pl-2 cursor-pointer w-[13%]'>Launch Demo Modal</div>
        <div className='hidden peer-checked:block'>
          <div className='bg-slate-200 pt-4 text-slate-900 pb-10 w-64 px-4 rounded-lg ml-[40%]'>
            <div className=''>
              <span>Modal Title</span>
              <span className='float-right'>X</span>
            </div>
            <div className=''>
              <p>Modal body text goes here.</p>
            </div>
            <div className='pt-5'>
              <span className='bg-slate-600 px-3 py-1 mx-1 rounded-lg float-right text-white cursor-pointer'>Close</span>
              <span className='bg-slate-600 px-3 py-1 mx-1 rounded-lg float-right text-white cursor-pointer'>Save Changes</span>
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}

export default Modal
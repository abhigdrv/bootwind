import React from 'react'

function Main(props:any) {
  return (
    <div className='p-4 rounded-lg bg-slate-800 col-span-2 min-h-[88vh]'>
        {props.children}
    </div>
  )
}

export default Main
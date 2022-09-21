import React from 'react'

function Pagination() {
  return (
    <div>
      <div>
        <h3>Pagination</h3>
        <div>
          <div className='flex justify-center'>
            <table>
              <tr className='border'>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>Prev</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>1</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>2</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer bg-slate-100 text-slate-900'>3</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>4</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>..</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>..</td>
                <td className='border border-slate-300 px-3 py-1 cursor-pointer'>Next</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
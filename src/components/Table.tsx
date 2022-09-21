import React from 'react'

function Table() {
  return (
    <div>
      <h3>Table</h3>
      <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className='border'>Song</th>
            <th className='border'>Artist</th>
            <th className='border'>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className='border'>Malcolm Lockyer</td>
            <td className='border'>1961</td>
          </tr>
          <tr>
            <td className='border'>Witchy Woman</td>
            <td className='border'>The Eagles</td>
            <td className='border'>1972</td>
          </tr>
          <tr>
            <td className='border'>Shining Star</td>
            <td className='border'>Earth, Wind, and Fire</td>
            <td className='border'>1975</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Table
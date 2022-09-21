import React from 'react'
import Card from '../components/Card'

function Portfolio() {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <Card name="Featured Product" icon="" value="126.00"/>
        <Card name="Hot Selling Product" icon="" value="245.00"/>
        <Card name="Relevant Product" icon="" value="876.00"/>
        <Card name="Top Rated Product" icon="" value="426.00"/>
      </div>
      <div className='grid grid-cols-12 gap-4 mt-6'>
        <Card name="Featured Product" icon="" value="126.00"/>
        <Card name="Hot Selling Product" icon="" value="245.00"/>
        <Card name="Relevant Product" icon="" value="876.00"/>
      </div>
    </div>
  )
}

export default Portfolio
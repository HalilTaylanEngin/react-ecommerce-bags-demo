import React from 'react'
import Slider from '../../components/Slider'
import Categories from '../../components/Categories'
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'

const index = () => {
  return (
    <React.Fragment>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </React.Fragment>
  )
}

export default index

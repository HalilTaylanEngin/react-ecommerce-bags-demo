import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Announcement from '../../components/Announcement'

const Layout = () => {
  return (
    <React.Fragment>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Layout

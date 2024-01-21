import React from 'react'
import HeaderNav from '../Navbar/HeaderNav'
import FooterContainer from '../Footer/FooterContainer'

export default function MainLayout({children}:any) {
  return (
    <>
      <HeaderNav/>
        {children}
      <FooterContainer/>
    </>
  )
}

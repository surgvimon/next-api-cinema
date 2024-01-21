'use client'
import { ConfigProvider } from 'antd'
import React from 'react'
import th_TH from 'antd/locale/th_TH'
import ScrollToTop from './ScrollToTop'
import { useSelector } from 'react-redux'

export default function LayoutProvider({ children, }: { children: React.ReactNode }) {
  const { isOverlayOpen } = useSelector((state:any) => state.movies);
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${isOverlayOpen ? 'body-no-scroll' : ''}`}>
          <ScrollToTop/>
          <ConfigProvider locale={th_TH}>{ children }</ConfigProvider>
      </body>
    </html>  
  )
}


import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </>
  )
}

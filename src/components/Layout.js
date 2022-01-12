import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {children}
    </>
  )
}

export default Layout

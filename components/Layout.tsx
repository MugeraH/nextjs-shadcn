import React from 'react'
import Navbar from './Navbar';

type Props = { 
    children:React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout
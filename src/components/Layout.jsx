import React from 'react'
import Navbar from './Navbar'
const Layout = ({layout}) => {
  return (
    <div className='container'>
        <Navbar/>
            <main class="container_layout"> 
                {layout}
            </main>
    </div>
  )
}

export default Layout
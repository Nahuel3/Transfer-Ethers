import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav_container'>
        <h1>Smartbrigde</h1>
        <div className='nav_item-container'>
            <li className='active'><svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bczRLJ dDDctG"><path d="M7 6H19V9H7V6Z"></path><path d="M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z"></path><path d="M18 16H5V19H18V16Z"></path><path d="M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z"></path></svg>Brigde</li>
        </div>
        <div className='nav_item-container'>
            <li><svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bczRLJ dDDctG"><path d="M7 6H19V9H7V6Z"></path><path d="M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z"></path><path d="M18 16H5V19H18V16Z"></path><path d="M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z"></path></svg>Staking</li>
        </div>
        <div className='nav_item-container'>
            <li><svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bczRLJ dDDctG"><path d="M7 6H19V9H7V6Z"></path><path d="M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z"></path><path d="M18 16H5V19H18V16Z"></path><path d="M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z"></path></svg>Exchange</li>
        </div>
    </nav>
  )
}

export default Navbar
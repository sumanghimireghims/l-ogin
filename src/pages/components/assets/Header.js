import React from 'react'

import search from './images/search.png'

function Header() {
  return (
   <div>
  <header>
    <div className="left-cont">
      <h2>Dashboard</h2>
    </div>
    <div className="right-cont">
      <div className="search-btn">
        <button className="search"><img src={search} alt /></button>
      </div>
      <div className="profile" onclick="profile()" />
    </div>
  </header>
</div>

  )
}

export default Header
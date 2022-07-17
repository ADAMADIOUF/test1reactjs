import React from 'react'
import { li } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
     <div className="nav-center">
      <div className="nav-header">
       <h3 className="logo">adama</h3>
      </div>
      <ul className="nav-links">
       <li><a href="/">home</a></li>

       
       <li><a href="/products">products</a></li>
      </ul>
     </div>
    </nav>
  )
}

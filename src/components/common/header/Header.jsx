import React, { useState } from "react"
import './heder.css'
import { nav } from "../../data/data"
import { Link } from "react-router-dom" 
const Header = () => {
  const[navList, setNavList] = useState(false)
  return (
    <div> 
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="Logo" />
            {/* <img src='./images/logo.png' alt="logo" /> */}
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list , index) =>(
                <li key={index}>
                  <Link to = {list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex gap-2">
            <h4>
              <span className="flex justify-content-center">2</span> 
              My List
            </h4>
            <button className="btn1">
              <i class="fa-solid fa-right-from-bracket"></i>
              Sign up
              </button>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header
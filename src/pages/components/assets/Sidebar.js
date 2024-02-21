import React, { useState,useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import search from './images/search.png'

import logodas from './images/logo.jpg'


import menu from './images/menu.png'
import dashboard from './images/dashboard.png'
import user from './images/user.png'
import teacher from './images/teacher.png'
import setup from './images/setup.png'





const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  useEffect(() => {
    const btn = document.querySelector("#menu-btn");

    btn.addEventListener("click", () => {
      setSidebar(!sidebar);
      setBtnText(!btnText);
    });
  }, [sidebar, btnText]);

  return (
    <div>
      <section className="sidebar">
        <div className="top">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src={logodas} alt="logo" />
            </a>
            <a href="#">
              <h2>SoftMinds</h2>
            </a>
          </div>
          <img className="nav-icon" id="menu-btn" src={menu} alt="Dashboard" />
        </div>

        <nav>
          <a
            className={`dashboard ${selected === "dashboard" ? "active" : ""}`}
            href="#"
            onClick={() => setSelected("dashboard")}
          >
            <img className="nav-icon" src={dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </a>

          <a
            className={`user ${selected === "user" ? "active" : ""}`}
            href="#"
            onClick={() => setSelected("user")}
          >
            <img className="nav-icon" src={user} alt="User" />
            <p>User</p>
          </a>

          <a
            className={`teacher ${selected === "teacher" ? "active" : ""}`}
            href="#"
            onClick={() => setSelected("teacher")}
          >
            <img className="nav-icon" src={teacher} alt="Teacher" />
            <p>Teacher</p>
          </a>

          <a
            className={`setup ${selected === "setup" ? "active" : ""}`}
            href="#"
            onClick={() => setSelected("setup")}
          >
            <img className="nav-icon" src={setup} alt="Setup" />
            <p>Setup</p>
          </a>
        </nav>
      </section>

      <header>
        <div className="left-cont">
          <h2>Dashboard</h2>
        </div>
        <div className="right-cont">
          <div className="search-btn">
            <button className="search">
              <img src={search} alt />
            </button>
          </div>
          <div className="profile" >
          </div>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
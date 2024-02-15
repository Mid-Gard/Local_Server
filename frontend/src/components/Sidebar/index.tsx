"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.css"; // Assuming you have a Header.module.css file for styling
import Image from "next/image";

import { BsMoonStars, BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx"
import { VscClose, VscExpandAll } from "react-icons/vsc"

function Header() {
  const [menuOpen, setMenuOpen] = useState(true); // Initialize to true for open state

  //use OS preferred value as default state
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  //sets after rendering as documentElement is not referring to page during first render
  useEffect(() => { document.documentElement.className = theme }, [theme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setTheme((theme === "dark") ? "light" : "dark")
  }

  return (
    <div className={`header`}>
      <div className={`appbar`}>
        <div className={`Toolbar`}>
          <div className={'TopHeading'}>
            <button onClick={toggleMenu} key={`menu-${menuOpen}`} className={`${`themetoggle`} ${`headerColors`}`}>
              {menuOpen ? <VscExpandAll className={`menuIcon`} size={20} /> : <RxHamburgerMenu className={`menuIcon`} size={18} />}
            </button>
            <Link href="/">
              <div className={`${`logobody`} ${`headerColors`}`}>
                <Image src="/logo.jpg" alt="Logo" width={40} height={40} className={`logoimg`} />
                <div className={`headername`}>Smart Farm</div>
              </div>
            </Link>
          </div>

          <div className={`headerbt`}>
            {menuOpen && (
              <div key={`nav-${menuOpen}`} className={`${`navbuttons`} ${`headerColors`}`}>
                <div className={`navitem`}>
                  <Link href="/" className={`navlink`}>
                    Dashboard
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/livestock" className={`navlink`}>
                    Livestock
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/weather" className={`navlink`}>
                    Weather
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/cctv" className={`navlink`}>
                    CCTV
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/actuators" className={`navlink`}>
                    Actuators
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/agv" className={`navlink`}>
                    AGV
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/uav" className={`navlink`}>
                    UAV
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/farmers" className={`navlink`}>
                    Farmers
                  </Link>
                </div>
                <div className={`navitem`}>
                  <Link href="/profile" className={`navlink`}>
                    Profile
                  </Link>
                </div>
              </div>
            )}
            {/* <button key={`theme-${theme}`} onClick={toggleTheme} className={`${`themetoggle`} ${`headerColors`}`}>
              {theme === "dark" ? <BsSun className={`themeIcon`} size={18} /> : <BsMoonStars className={`themeIcon`} size={15} />}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Header };

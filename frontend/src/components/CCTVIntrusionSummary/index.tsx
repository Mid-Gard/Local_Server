"use client"

import React, { useState } from 'react'
import "./styles.css"
import Image from 'next/image'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { RxHamburgerMenu } from "react-icons/rx"
import { GrClose } from "react-icons/gr"

function CCTVIntrusionSummary() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    if(document.documentElement.className === "dark") document.documentElement.className = "light";
    else document.documentElement.className = "dark";
    setTheme((prev)=>prev === "dark" ? "light" : "dark")
  }
  
  return (
    <div className='SummaryHome'>
      Hello
    </div>
  )
}

export { CCTVIntrusionSummary }
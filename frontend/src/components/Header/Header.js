import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "../../styles/Home.module.css";

// import "./Header.css";

function Header({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <div className={styles.appbar}>
        <div className={styles.Toolbar}>
          <Link href="/">
            <div className={`${styles.logobody} ${styles.headerColors}`}>
              <div className={styles.headerlogo}>
              <img src="ClubLogo.png" />
              </div>
              <div className={styles.headername}>Farm Management</div>
            </div>
          </Link>
          <div className={styles.headerbt}>
            <div className={`${styles.navbuttons} ${styles.headerColors}`}>
              <div className={styles.navitem}>
                <Link href="/" className={styles.navlink}>
                  Dashboard
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/livestock" className={styles.navlink}>
                  livestock
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/cctv" className={styles.navlink}>
                  CCTV
                </Link>
              </div>
              <div className={styles.navitem}>
                <Link href="/agv" className={styles.navlink}>
                  AGV
                </Link>
              </div>
            </div>
            <div className={`${styles.themetoggle} ${styles.headerColors}`}>
              <img
                src="/ClubLogo.png"
                alt="Theme Icon"
                width={42}
                height={42}
                className={styles.themeicon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
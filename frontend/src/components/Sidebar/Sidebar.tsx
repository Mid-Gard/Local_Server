import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar: FunctionComponent = () => {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.sidebar}>
      <img className={styles.listIcon} alt="" src="/list@2x.png" />
      <div className={styles.farmManagementWrapper}>
        <div className={styles.farmManagement}>Farm management</div>
      </div>
      <div className={styles.sidbarLinks}>
        <div className={styles.background}>
          <img
            className={styles.cattleBehaviorIcon}
            alt=""
            src="/cattle-behavior.svg"
          />
          <div className={styles.LinkButton}>
            <Link to="/" >
              <Button
                className={isActiveLink("/") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="20px"
                    height="20px"
                    src="/homeicon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                Dashboard
                </div>
              </Button>
            </Link>
            <Link to="/livestock" >
              <Button
                className={isActiveLink("/livestock") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/livestockicon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                  Livestock
                </div>
              </Button>
            </Link>
            <Link to="/weather" >
              <Button
                className={isActiveLink("/weather") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/weathericon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                Weather
                </div>
              </Button>
            </Link>
            <Link to="/cctv" >
              <Button
                className={isActiveLink("/cctv") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/cctvicon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                CCTV
                </div>
              </Button>
            </Link>
            <Link to="/actuators" >
              <Button
                className={isActiveLink("/actuators") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/actuatoricon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                Actuators
                </div>
              </Button>
            </Link>
            <Link to="/agv" >
              <Button
                className={isActiveLink("/agv") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/agvicon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                AGV
                </div>
              </Button>
            </Link>
            <Link to="/uav" >
              <Button
                className={isActiveLink("/uav") ? styles.activeLink : styles.normalLink}
                startIcon={
                  <img
                    width="30px"
                    height="30px"
                    src="/uavicon.svg"
                  />
                }
              >
                <div className={styles.buttonText}>
                UAV
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.frameIcon}>
          <div className={styles.livestockOutsideFrame}>
            <img
              className={styles.vector8Stroke}
              loading="eager"
              alt=""
              src="/vector-8-stroke.svg"
            />
          </div>
          <Link to="/profile" >
            <Button
              className={isActiveLink("/profile") ? styles.activeLink : styles.normalLink}
              startIcon={
                <img
                  width="30px"
                  height="30px"
                  src="/profileicon.svg"
                />
              }
            >
              <div className={styles.buttonText}>
              Profile
              </div>
            </Button>
          </Link>
          <Link to="/farmers" >
            <Button
              className={isActiveLink("/farmers") ? styles.activeLink : styles.normalLink}
              startIcon={
                <img
                  width="30px"
                  height="30px"
                  src="/famersicon.svg"
                />
              }
            >
              <div className={styles.buttonText}>
              Farmers
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;








/*

            <div className={styles.pageLinks}>
              <div className={styles.group}>
                <div className={styles.tables}>
                  <div className={styles.weather}>
                    <div className={styles.TabLink}>
                      <Link to="/livestock" className={`${styles.dashboard} ${isActiveLink("/livestock") ? styles.dashboard : ''}`}>
                        <Button variant="text">
                          <img
                            className={styles.ioniconccarddefault}
                            loading="eager"
                            alt=""
                            src="/ioniconccarddefault.svg"
                          />
                          Livestock
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div >
              </div >
            </div >

*/
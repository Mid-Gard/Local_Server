import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import Weather from "../Weather";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";

const Sidebar: FunctionComponent = () => {
  const onTablesContainerClick = useCallback(() => {
    // Please sync "LiveStock Tab" to the project
  }, []);

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
          <div className={styles.totalOnlineProgress}>
            <Link to="/" >
              <Button
                className={styles.dashboard}
                startIcon={
                  <img
                    width="15.3px"
                    height="15px"
                    src="/ioniconhhomedefault.svg"
                  />
                }
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#1a1f37",
                  borderRadius: "15.000000953674316px",
                  "&:hover": { background: "#1a1f37" },
                  height: 55,
                }}
              >
                Dashboard
              </Button>
            </Link>
            <div className={styles.pageLinks}>
              <div className={styles.group}>
                <div className={styles.tables} onClick={onTablesContainerClick}>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/livestock" className={styles.nav_link}>
                        Livestock
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/weather" className={styles.nav_link}>
                        Weather
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/cctv" className={styles.nav_link}>
                        CCTV
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/actuators" className={styles.nav_link}>
                        Actuators
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/agv" className={styles.nav_link}>
                        AGV
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                  <div className={styles.weather}>
                    <div className={styles.secondCard} />
                    <div className={styles.weather1}>
                      <Link to="/uav" className={styles.nav_link}>
                        UAV
                      </Link>
                    </div>
                    <img
                      className={styles.ioniconccarddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconccarddefault.svg"
                    />
                  </div>
                </div>
              </div>
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
              <div className={styles.analyzeDataFrame}>
                <div className={styles.accountPages}>ACCOUNT PAGES</div>
              </div>
              <div className={styles.rainfallFrame}>
                <div className={styles.cattleBehaviourFrame}>
                  <div className={styles.aMFrame}>
                    <div className={styles.pMFrame}>
                      <div className={styles.pMFrameChild} />
                      <img
                        className={styles.ioniconppersondefault}
                        loading="eager"
                        alt=""
                        src="/ioniconppersondefault.svg"
                      />
                    </div>
                    <div className={styles.farmers}>Farmers</div>
                  </div>
                  <div className={styles.aMFrame1}>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild1} />
                      <img
                        className={styles.ioniconrrocketsharp}
                        loading="eager"
                        alt=""
                        src="/ioniconrrocketsharp.svg"
                      />
                    </div>
                    <div className={styles.profile}>Profile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

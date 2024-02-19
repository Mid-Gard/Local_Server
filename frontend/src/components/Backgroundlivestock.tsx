import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./Backgroundlivestock.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LivestockMap from "./LivestockMap/LivestockMap";

// Define the type for location objects
interface Location {
  id: number;
  lat: number;
  lng: number;
}

const Backgroundlivestock: FunctionComponent = () => {
  const onIconClick = useCallback(() => {
    // Please sync "Report Tab" to the project
  }, []);

  const onIconContainerClick = useCallback(() => {
    // Please sync "Report Tab" to the project
  }, []);

  return (
    <div className={styles.backgroundlivestock}>
      <div className={styles.framefirstcard}>
        <div className={styles.background}>
          <div className={styles.firstCard}>
            <img
              className={styles.backgroundIcon}
              loading="eager"
              alt=""
              src="/background-1@2x.png"
            />
            <div className={styles.markJohnson}>
              <div className={styles.welcomeback}>
                <div className={styles.welcomeBack}>Welcome back,</div>
                <h1 className={styles.markJohnson1}>Mark Johnson</h1>
              </div>
            </div>
            <div className={styles.iconFrameArrowNodes}>
              <div className={styles.analyzeThePast}>
                Analyze the past data and reports.
              </div>
            </div>
            <Button
              className={styles.icon}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#0075ff",
                borderRadius: "12.000000953674316px",
                "&:hover": { background: "#0075ff" },
                width: 124,
                height: 30,
              }}
              onClick={onIconClick}
            >{`Reports ->`}</Button>
          </div>
          <div className={styles.mediumSatisfaction}>
            <div className={styles.framecombinedhumidity}>
              <div className={styles.progressbars}>
                <h3 className={styles.title}>Humidity</h3>
                <div className={styles.titleFrame}>
                  <div className={styles.combinedHumidityFrom}>
                    Combined humidity from all devices
                  </div>
                  <div className={styles.progressBarParent}>
                    <img
                      className={styles.progressBarIcon}
                      alt=""
                      src="/progress-bar.svg"
                    />
                    <img
                      className={styles.icon1}
                      loading="eager"
                      alt=""
                      src="/icon-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.div}>0%</div>
              <div className={styles.livestockBehaviorFrameWrapper}>
                <div className={styles.livestockBehaviorFrame}>95%</div>
              </div>
              <div className={styles.div1}>100%</div>
            </div>
          </div>
        </div>
        <div className={styles.background1}>
          <div className={styles.rainfallInchesFrame}>
            <div className={styles.viewAllFrame}>
              <h3 className={styles.rainfallInches}>Rainfall (inches)</h3>
              <div className={styles.icon2} onClick={onIconContainerClick}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-3.svg"
                  />
                  <h3 className={styles.monthwiseReport}> Monthwise Report</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tablerlayoutsidebarLinesParent}>
            <div className={styles.tablerlayoutsidebarLines}>
              <div className={styles.aMFrame}>
                <div className={styles.pMFrame}>
                  <b className={styles.humidityGraph}>5</b>
                  <b className={styles.humidityGraph1}>4</b>
                  <b className={styles.humidityGraph2}>3</b>
                  <b className={styles.humidityGraph3}>2</b>
                  <b className={styles.humidityGraph4}>1</b>
                  <b className={styles.humidityGraph5}>0</b>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.linesParent}>
                    <img className={styles.linesIcon} alt="" src="/lines.svg" />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-7068.svg"
                    />
                  </div>
                  <div className={styles.tablerlayoutSidebarParent}>
                    <img
                      className={styles.tablerlayoutSidebarIcon}
                      loading="eager"
                      alt=""
                      src="/tablerlayoutsidebar.svg"
                    />
                    <img
                      className={styles.linesIcon1}
                      alt=""
                      src="/lines-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background2}>
        <LivestockMap />
        <div className={styles.cattleBehaviorWrapper}>
          <div className={styles.cattleBehavior}>
            <div className={styles.cCTVFrame}>
              <h3 className={styles.cattleBehaviour}>Cattle Behaviour</h3>
              <div className={styles.thanLastWeekContainer}>
                <span className={styles.span}>(+23)</span>
                <span className={styles.thanLastWeek}> than last week</span>
              </div>
            </div>
            <div className={styles.onlineProgress}>
              <div className={styles.iconTotalOnline}>
                <div className={styles.progressFrames}>
                  <div className={styles.wrapperIcon}>
                    <img
                      className={styles.icon3}
                      loading="eager"
                      alt=""
                      src="/icon-6.svg"
                    />
                  </div>
                  <div className={styles.totalOnline}>Total Online</div>
                </div>
                <div className={styles.pMFrames}>300</div>
                <img
                  className={styles.progressIcon}
                  loading="eager"
                  alt=""
                  src="/progress.svg"
                />
              </div>
              <div className={styles.iconTotalOnline1}>
                <div className={styles.wrapperIconParent}>
                  <div className={styles.wrapperIcon1}>
                    <img
                      className={styles.icon4}
                      loading="eager"
                      alt=""
                      src="/icon-7.svg"
                    />
                  </div>
                  <div className={styles.walking}>Walking</div>
                </div>
                <div className={styles.div2}>24</div>
                <img
                  className={styles.progressIcon1}
                  loading="eager"
                  alt=""
                  src="/progress-1.svg"
                />
              </div>
              <div className={styles.iconTotalOnline2}>
                <div className={styles.wrapperIconGroup}>
                  <div className={styles.wrapperIcon2}>
                    <img
                      className={styles.icon5}
                      loading="eager"
                      alt=""
                      src="/icon-8.svg"
                    />
                  </div>
                  <div className={styles.idle}>Idle</div>
                </div>
                <div className={styles.div3}>276</div>
                <img
                  className={styles.progressIcon2}
                  alt=""
                  src="/progress-2.svg"
                />
              </div>
              <div className={styles.cattleBehavior1}>
                <div className={styles.onlineOffline}>
                  <div className={styles.icon6}>
                    <div className={styles.iconChild} />
                    <img
                      className={styles.ioniconbbuilddefault}
                      loading="eager"
                      alt=""
                      src="/ioniconbbuilddefault-1.svg"
                    />
                  </div>
                  <div className={styles.offline}>Offline</div>
                </div>
                <div className={styles.label}>320</div>
                <img
                  className={styles.progressIcon3}
                  alt=""
                  src="/progress-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backgroundlivestock;

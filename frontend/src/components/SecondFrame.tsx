import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./SecondFrame.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LivestockMap from "./LivestockMap/LivestockMap";
import DashBoard from "../pages/DashBoard";
import DashboardLivetock from "./DashboardLivestock/DashboardLivestock"

// Define the type for location objects
interface Location {
  id: number;
  lat: number;
  lng: number;
}

const SecondFrame: FunctionComponent = () => {
  const onIconClick = useCallback(() => {
    // Please sync "Report Tab" to the project
  }, []);

  const onIconContainerClick = useCallback(() => {
    // Please sync "Report Tab" to the project
  }, []);

  return (
    <div className={styles.SecondFrame}>
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
      <div className={styles.framesecondcard}>
        <DashboardLivetock />
      </div>
    </div>
  );
};

export default SecondFrame;

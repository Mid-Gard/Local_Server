import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./SecondFrame.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LivestockMap from "../LivestockMap/LivestockMap";
import DashBoard from "../../pages/DashBoard";
import DashboardLivetock from "../DashboardLivestock/DashboardLivestock"
import DashboardWeatherCard from "../DashboardWeatherCard/DashboardWeatherCard";
import DashboardWeatherForecast from "../DashboardWeatherForecast/DashboardWeatherForecast";
import WindGraph from "../WindGraph/WindGraph";

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
          <DashboardWeatherCard />
          <DashboardWeatherForecast />
        </div>
        <WindGraph />

      </div>
      <div className={styles.framesecondcard}>
        <DashboardLivetock />
      </div>
    </div>
  );
};

export default SecondFrame;

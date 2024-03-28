"use client"
import { FunctionComponent, useCallback, useState } from "react";
// import {
//   TextField,
//   InputAdornment,
//   Icon,
//   IconButton,
//   Button,
// } from "@mui/material";
import styles from "./DashboardThirdFrame.module.css";
import NotificationBox from "../NotificationBox/NotificationBox";
import IrrigationMap from "../IrrigationMap/IrrigationMap";

interface cctvCamfeedProps {
  camUrl: string;
}

function DashboardThirdFrame({ camUrl }: cctvCamfeedProps) {
  const onViewAllClick = useCallback(() => {
    // Please sync "CCTV Tab" to the project
  }, []);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.DashboardThirdFrame}>
      <IrrigationMap />
      <div className={styles.CCTVbox}>
        <div className={styles.background1}>
          <div className={styles.notifications}>
            <h3 className={styles.cctv}>CCTV</h3>
            <div
              className={styles.viewAll}
              onClick={onViewAllClick}
            >{`View All ->`}</div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.background2} >
              <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
            </div>
            <div className={styles.background3} >
              <img id="browser_video" className={styles.video_image} alt="video" src='http://192.168.0.133:5000/video_feed' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.NotifcationBoxInDashboard}>
        <NotificationBox />
      </div>
    </div>
  );
};

export default DashboardThirdFrame;

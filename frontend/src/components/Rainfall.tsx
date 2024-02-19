"use client"
import { FunctionComponent, useCallback, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Rainfall.module.css";

interface cctvCamfeedProps {
  camUrl: string;
}

function Rainfall({ camUrl }: cctvCamfeedProps) {
  const onViewAllClick = useCallback(() => {
    // Please sync "CCTV Tab" to the project
  }, []);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.rainfall}>
      <div className={styles.background}>
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
              <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background4}>
      </div>
      <div className={styles.secondCard}>
        <img className={styles.listIcon} alt="" src="/list.svg" />
        <div className={styles.notifsList}>
          <div className={styles.monthlyNotif}>
            <h3 className={styles.notifications1}>Notifications</h3>
            <div className={styles.checkmarkIcon}>
              <img
                className={styles.ioniconccheckmarkccircle}
                loading="eager"
                alt=""
                src="/ioniconccheckmarkccircle.svg"
              />
              <div className={styles.thisMonth}>
                <span className={styles.span}>+30%</span>
                <span> this month</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cameraDetectNotif}>
          <TextField
            className={styles.todaysMoney}
            placeholder="Two People detected on Camera 3"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "38.5px",
                backgroundColor:
                  "linear-gradient(95.68deg, rgba(24, 52, 40, 0.74), rgba(46, 157, 8, 0.5))",
                borderRadius: "20px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#dee0e2" },
            }}
          />
          <Button
            className={styles.todaysMoney1}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#dee0e2",
              fontSize: "14",
              background:
                "linear-gradient(95.68deg, rgba(24, 52, 40, 0.74), rgba(46, 157, 8, 0.5))",
              borderRadius: "20px",
              "&:hover": {
                background:
                  "linear-gradient(95.68deg, rgba(24, 52, 40, 0.74), rgba(46, 157, 8, 0.5))",
              },
              height: 40,
            }}
          >
            A wild animal detected on Camera 7
          </Button>
          <Button
            className={styles.todaysMoney2}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#dee0e2",
              fontSize: "14",
              background:
                "linear-gradient(95.68deg, rgba(24, 52, 40, 0.74), rgba(46, 157, 8, 0.5))",
              borderRadius: "20px",
              "&:hover": {
                background:
                  "linear-gradient(95.68deg, rgba(24, 52, 40, 0.74), rgba(46, 157, 8, 0.5))",
              },
              height: 39,
            }}
          >
            Cow 113 went offline at location : Map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rainfall;

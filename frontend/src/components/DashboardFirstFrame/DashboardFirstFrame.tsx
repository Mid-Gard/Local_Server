import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DashboardFirstFrame.module.css";

const DashboardFirstFrame: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <nav className={styles.todaysMoneyFrame}>
        <div className={styles.livestockInsidediv}>
          <div className={styles.livestockOutside}>
            <div className={styles.livestockInside}>Livestock Inside</div>
          </div>
          <div className={styles.div}>100</div>
          <div className={styles.frameAMPM}>
            <div className={styles.background1}>
              <div className={styles.frameAM}>+55%</div>
            </div>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.livestockInsidediv}>
          <div className={styles.livestockOutside}>
            <div className={styles.livestockInside}>Livestock Outside</div>
          </div>
          <div className={styles.div}>50</div>
          <div className={styles.frameAMPM}>
            <div className={styles.background1}>
              <div className={styles.frameAM}>+55%</div>
            </div>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.livestockInsidediv}>
          <div className={styles.livestockOutside}>
            <div className={styles.livestockInside}>AGV Battery</div>
          </div>
          <div className={styles.frameAMPM}>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/icon-1.svg"
              />
            </div>
            <div className={styles.div}>33 %</div>
          </div>
        </div>
        <div className={styles.livestockInsidediv}>
          <div className={styles.livestockOutside}>
            <div className={styles.livestockInside}>Drone Battery</div>
          </div>
          <div className={styles.frameAMPM}>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/icon-1.svg"
              />
            </div>
            <div className={styles.div}>70 %</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardFirstFrame;

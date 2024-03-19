import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DashboardFirstFrame.module.css";

const DashboardFirstFrame: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <nav className={styles.todaysMoneyFrame}>
        <div className={styles.todaysMoney}>
          <div className={styles.livestockOutside}>
            <div className={styles.livestockInside}>{`Livestock Inside `}</div>
          </div>
          <div className={styles.div}>300</div>
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
        <div className={styles.todaysUsers}>
          <div className={styles.todaysUsersChild} />
          <div className={styles.livestockOutside1}>Livestock Outside</div>
          <div className={styles.blankParent}>
            <div className={styles.blank}>500</div>
            <div className={styles.livestockSummaryFrame}>
              <div className={styles.backgroundIcon}>+5%</div>
            </div>
            <div className={styles.wrapperIcon1}>
              <img
                className={styles.icon2}
                loading="eager"
                alt=""
                src="/icon-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.todaysUsers}>
          <div className={styles.todaysUsersChild} />
          <div className={styles.livestockOutside1}>AGV Battery</div>
          <div className={styles.blankParent}>
            <div className={styles.blank}>33 %</div>
            <div className={styles.livestockSummaryFrame}>
              <div className={styles.backgroundIcon}>+5%</div>
            </div>
            <div className={styles.wrapperIcon1}>
              <img
                className={styles.icon2}
                loading="eager"
                alt=""
                src="/icon-2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.todaysUsers}>
          <div className={styles.todaysUsersChild} />
          <div className={styles.livestockOutside1}>UAV Battery</div>
          <div className={styles.blankParent}>
            <div className={styles.blank}>70 %</div>
            <div className={styles.livestockSummaryFrame}>
              <div className={styles.backgroundIcon}>+15%</div>
            </div>
            <div className={styles.wrapperIcon1}>
              <img
                className={styles.icon2}
                loading="eager"
                alt=""
                src="/icon-2.svg"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardFirstFrame;

import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DashboardFirstFrame.module.css";

const DashboardFirstFrame: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <nav className={styles.todaysMoneyFrame}>
        <div className={styles.todaysMoney}>
          <div className={styles.todaysMoneyChild} />
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
        <div className={styles.newClients}>
          <div className={styles.newClientsChild} />
          <div className={styles.newClientsParent}>
            <div className={styles.newClients1}>New Clients</div>
            <div className={styles.frameIcon1}>
              <div className={styles.reportsFrame}>+3,052</div>
              <div className={styles.secondCardNotificationsButt}>
                <div className={styles.graphFrameBorder}>-14%</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperIcon2}>
            <img
              className={styles.icon3}
              loading="eager"
              alt=""
              src="/icon-3.svg"
            />
          </div>
        </div>
        <div className={styles.totalSales}>
          <div className={styles.totalSalesChild} />
          <div className={styles.frameGroup}>
            <div className={styles.totalSalesParent}>
              <div className={styles.totalSales1}>Total Sales</div>
              <div className={styles.blank1}>$173,000</div>
            </div>
            <div className={styles.div1}>+8%</div>
          </div>
          <div className={styles.wrapperIcon3}>
            <img
              className={styles.icon4}
              loading="eager"
              alt=""
              src="/icon-4.svg"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardFirstFrame;

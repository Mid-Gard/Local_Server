import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./DashboardFirstFrame.module.css";

const DashboardFirstFrame: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.backgroundParent}>
        <div className={styles.background}>
          <img
            className={styles.frameIcon}
            loading="eager"
            alt=""
            src="/rectangle-596@2x.png"
          />
          <h3 className={styles.aarasFarm}>AARAS Farm</h3>
          <div className={styles.saturday10thFebruary}>
            Saturday, 10th February 2024
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.inputwithaddonsParent}>
            <TextField
              className={styles.inputwithaddons}
              placeholder="Type here..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="15px" height="15px" src="/icon.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "rgba(226, 232, 240, 0.3)" },
                "& .MuiInputBase-root": {
                  height: "27.4px",
                  backgroundColor: "#10350f",
                  paddingLeft: "11px",
                  borderRadius: "15.000000953674316px",
                  fontSize: "12px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "11px",
                  color: "#a0aec0",
                },
              }}
            />
            <div className={styles.icon}>
              <div className={styles.listitemdefault}>
                <div className={styles.frameTitle}>
                  <div className={styles.iconFrame}>
                    <img
                      className={styles.ioniconppersondefault}
                      alt=""
                      src="/ioniconppersondefault-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameFrame}>
                  <div className={styles.livestockOutsideFrame}>
                    <div className={styles.signIn}>Sign In</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.ioniconssettingssharp}
                alt=""
                src="/ioniconssettingssharp.svg"
              />
              <img
                className={styles.ioniconnnotificationsdefaul}
                alt=""
                src="/ioniconnnotificationsdefault.svg"
              />
            </div>
          </div>
        </div>
      </div>
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

// I have commented the css of the maincontent div for now to show the image, afterwards uncomment it back

import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "@mui/material";
import styles from "./DashboardWeatherCard.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";

function DashboardWeatherCard() {
    const onTablesContainerClick = useCallback(() => {
        // Please sync "LiveStock Tab" to the project
    }, []);

    const onViewAllClick = useCallback(() => {
        // Please sync "CCTV Tab" to the project
    }, []);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles.weatherreportcard}>
            <img
                className={styles.weathercardimg}
                loading="eager"
                alt=""
                src="/DashboardWeatherCard.png"
            />
            <div className={styles.maincontent}>   
                {/* <div className={styles.frame}>
                <div className={styles.title}>Weather Report</div>
                <div className={styles.seeallbutton}>
                    <div className={styles.wrapperRectangle3}>
                        <img
                            className={styles.wrapperRectangle3Child}
                            alt=""
                            src="/rectangle-3.svg"
                        />
                    </div>
                    <div className={styles.seeAll}>See all</div>
                </div>
            </div>
            <div className={styles.frame1}>
                <div className={styles.frame2}>
                    <div className={styles.frame3}>
                        <div className={styles.firstdesign}>
                            <div className={styles.firstdesignbackground}>
                                <img
                                    className={styles.subtractIcon}
                                    alt=""
                                    src="/seconddesignbackground@2x.png"
                                />
                                <div className={styles.firstdesignbackgroundChild} />
                            </div>
                            <div className={styles.firstdesigntext}>
                                <b className={styles.humid}>77% Humid</b>
                                <div className={styles.c}>37 °C</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.frame4}>
                        <div className={styles.seconddesign}>
                            <img
                                className={styles.seconddesignbackgroundIcon}
                                alt=""
                                src="/seconddesignbackground@2x.png"
                            />
                            <div className={styles.seconddesigntext}>
                                <b className={styles.thisMonth07Container}>
                                    <p className={styles.thisMonth}>77” This month</p>
                                    <p className={styles.today}>0.7” Today</p>
                                </b>
                                <b className={styles.rainfall}>Rainfall</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default DashboardWeatherCard;




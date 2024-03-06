import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./DashboardLivestock.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import LivestockMap from "../LivestockMap/LivestockMap";

const SecondFrame: FunctionComponent = () => {
    const onIconClick = useCallback(() => {
        // Please sync "Report Tab" to the project
    }, []);

    const onIconContainerClick = useCallback(() => {
        // Please sync "Report Tab" to the project
    }, []);

    return (
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
    );
};

export default SecondFrame;
import { FunctionComponent, useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import styles from "./DashboardLivestock.module.css";
import LivestockMap from "../LivestockMap/LivestockMap";

const SecondFrame: FunctionComponent = () => {
    const [data, setData] = useState<{
        TotalDevices: number;
        InFarm: number;
        OutFarm: number;
        OffDevices: number;
    }>({
        TotalDevices: 0,
        InFarm: 0,
        OutFarm: 0,
        OffDevices: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://192.168.0.186:8000/livestock/loc_status');
                const newData = await response.json();
                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.background2}>
            <div className={styles.livestockmap}>
                <LivestockMap />
            </div>
            <div className={styles.cattleBehaviorWrapper}>
                <div className={styles.cattleBehavior}>
                    <div className={styles.TittleSection}>
                        <div className={styles.HeadingSection}>
                        <h3 className={styles.Heading}>Cattle Behaviour</h3>
                            <h3 className={styles.Heading}>Total Cows : 300</h3>
                        </div>
                        <div className={styles.thanLastWeekContainer}>
                            <span className={styles.span}>(+23)</span>
                            <span className={styles.thanLastWeek}> than last week</span>
                        </div>
                    </div>
                    <div className={styles.ParameterSection}>
                        <div className={styles.TotalOnline}>
                            <div className={styles.progressFrames}>
                                <div className={styles.wrapperIcon}>
                                    <img
                                        className={styles.icon}
                                        loading="eager"
                                        alt=""
                                        src="/icon-7.svg"
                                    />
                                    <div className={styles.totalOnline}>Total Online</div>
                                </div>
                            </div>
                            <div className={styles.valueSection}>
                                <div className={styles.value}>{data.TotalDevices}</div>
                                <div className={styles.progressbar}>
                                    <LinearProgress variant="determinate" value={(data.TotalDevices / 100) * 100} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.InFarm}>
                            <div className={styles.progressFrames}>
                                <div className={styles.wrapperIcon}>
                                    <img
                                        className={styles.icon}
                                        loading="eager"
                                        alt=""
                                        src="/icon-7.svg"
                                    />
                                    <div className={styles.totalOnline}>Total Online</div>
                                </div>
                            </div>
                            <div className={styles.valueSection}>
                                <div className={styles.value}>
                                    {data.InFarm}
                                </div>
                                <div className={styles.progressbar}>
                                    <LinearProgress variant="determinate" value={(data.InFarm / 100) * 100} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.OutFarm}>
                            <div className={styles.progressFrames}>
                                <div className={styles.wrapperIcon}>
                                    <img
                                        className={styles.icon}
                                        loading="eager"
                                        alt=""
                                        src="/icon-7.svg"
                                    />
                                    <div className={styles.totalOnline}>Total Online</div>
                                </div>
                            </div>
                            <div className={styles.valueSection}>
                                <div className={styles.value}>
                                    {data.OutFarm}
                                </div>
                                <div className={styles.progressbar}>
                                    <LinearProgress variant="determinate" value={(data.OutFarm / 100) * 100} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.OffDevices}>
                            <div className={styles.progressFrames}>
                                <div className={styles.wrapperIcon}>
                                    <img
                                        className={styles.icon}
                                        loading="eager"
                                        alt=""
                                        src="/icon-7.svg"
                                    />
                                    <div className={styles.totalOnline}>Total Online</div>
                                </div>
                            </div>
                            <div className={styles.valueSection}>
                                <div className={styles.value}>
                                    {data.OffDevices}
                                </div>
                                <div className={styles.progressbar}>
                                    <LinearProgress variant="determinate" value={(data.OffDevices / 100) * 100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondFrame;
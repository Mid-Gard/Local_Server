"use client"
import { FunctionComponent, useCallback, useState } from "react";
import styles from "./DashboardThirdFrame.module.css";

function DashboardWeatherReport() {
    const onViewAllClick = useCallback(() => {
        // Please sync "CCTV Tab" to the project
    }, []);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles.DashboardThirdFrame}>
            <div className={styles.CCTVbox}>
                <div className={styles.background1}>
                    Hello
                </div>
            </div>
        </div>
    );
};

export default DashboardWeatherReport;

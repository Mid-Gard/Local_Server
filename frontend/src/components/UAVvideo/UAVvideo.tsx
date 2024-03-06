import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "@mui/material";
import Weather from "../Weather";
import styles from "./UAVvideo.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";


interface cctvCamfeedProps {
    camUrl: string;
}

function UAVvideo({ camUrl }: cctvCamfeedProps) {
    const onTablesContainerClick = useCallback(() => {
        // Please sync "LiveStock Tab" to the project
    }, []);

    const onViewAllClick = useCallback(() => {
        // Please sync "CCTV Tab" to the project
    }, []);
    const [showMore, setShowMore] = useState(false);

    return (
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
                </div>
            </div>
        </div>
    );
};

export default UAVvideo;

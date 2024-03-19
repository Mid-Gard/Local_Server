import { FunctionComponent, useCallback, useState } from "react";
import styles from "./UAVvideo.module.css";


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
                    <h3 className={styles.cctv}>Drone Video Feed</h3>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.background2}>
                        <img
                            id="browser_video"
                            className={styles.video_image}
                            alt="video"
                            src={camUrl}
                            style={{ clipPath: 'inset(9% 0 0 0)' }} // Apply clip-path CSS to crop top 10%
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UAVvideo;

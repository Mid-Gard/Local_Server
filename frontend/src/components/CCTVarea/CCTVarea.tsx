// CCTVArea.tsx
import React, { FunctionComponent } from "react";
import styles from "./CCTVarea.module.css";

interface CCTVAreaProps {
    camUrls: string[];
}

const CCTVArea: FunctionComponent<CCTVAreaProps> = ({ camUrls }) => {
    return (
        <div className={styles.cctvArea}>
            {camUrls.map((url, index) => (
                <div key={index} className={styles.videoContainer}>
                    <img className={styles.videoImage} alt={`video ${index + 1}`} src={url} />
                </div>
            ))}
        </div>
    );
};

export default CCTVArea;

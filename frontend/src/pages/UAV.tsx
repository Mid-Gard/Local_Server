import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import UAVvideo from "../components/UAVvideo/UAVvideo";

const UAV: FunctionComponent = () => {

    const camUrl = 'http://192.168.0.133:5000/video_feed';
    return (
        <div className={styles.dashboard}>
            <main className={styles.background}>
                <div className={styles.backgroundChild} />
                <div className={styles.iconFrame}>
                    <Sidebar />
                </div>
                <section className={styles.frameParent}>
                    <UAVvideo camUrl={camUrl} />
                </section>
            </main>
        </div>
    );
};

export default UAV;

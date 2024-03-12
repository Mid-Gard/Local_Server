import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import UAVvideo from "../components/UAVvideo/UAVvideo";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import TopBar from "../components/TopBar/TopBar";

const UAV: FunctionComponent = () => {

    const camUrl = 'http://192.168.0.133:5000/video_feed';
    return (
        <div className={styles.dashboard}>
            <main className={styles.background}>
                <div className={styles.backgroundChild} />
                <div className={styles.iconFrame}>
                    <Sidebar />
                    <NeedHelpBox />
                </div>
                <section className={styles.frameParent}>
                    <TopBar />
                    <UAVvideo camUrl={camUrl} />
                </section>
            </main>
        </div>
    );
};

export default UAV;

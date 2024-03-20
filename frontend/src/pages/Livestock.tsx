import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import TopBar from "../components/TopBar/TopBar";
import LivestockMap from "../components/LivestockMap/LivestockMap";
import NotificationBox from "../components/NotificationBox/NotificationBox";

const Livestock: FunctionComponent = () => {

    const camUrl = 'http://192.168.0.176:8080/video';
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
                    <div className={styles.livestockBody}>
                        <div className={styles.livestockLeftSection}>
                            <div className={styles.livestockmap}>
                                <LivestockMap />
                            </div>
                            <div className={styles.livestockgraph}>
                                
                            </div>
                        </div>
                        <div className={styles.livestockRightSection}>
                            <div className={styles.notificationbox}>
                                <NotificationBox />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Livestock;

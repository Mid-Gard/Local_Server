import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import TopBar from "../components/TopBar/TopBar";
import AGVvideoFeed from "../components/AGVvideoFeed/AGVvideoFeed";
import AGVmap from "../components/AGVmap/AGVmap";
import AGVparams from "../components/AGVparams/AGVparams";
import AGVcontrols from "../components/AGVcontrols/AGVcontrols";
import AGVControlPanel from "../components/AGVControlPanel/AGVControlPanel";

const AGV: FunctionComponent = () => {

    const camUrl = 'http://192.168.0.106:5000/video';
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
                    <div className={styles.AGVHomeContent}>
                        <div className={styles.leftSection}>
                            <AGVvideoFeed camUrl={camUrl} />
                            <AGVparams />
                        </div>
                        <div className={styles.AGVrightSection}>
                            <AGVmap />
                            {/* <AGVcontrols /> */}
                            <AGVControlPanel />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AGV;

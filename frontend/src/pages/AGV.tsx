import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";

const AGV: FunctionComponent = () => {

    const camUrl = 'http://192.168.0.176:8080/video';
    return (
        <div className={styles.dashboard}>
            <main className={styles.background}>
                <div className={styles.backgroundChild} />
                <div className={styles.iconFrame}>
                    <Sidebar />
                </div>
                <section className={styles.frameParent}>

                </section>
            </main>
        </div>
    );
};

export default AGV;

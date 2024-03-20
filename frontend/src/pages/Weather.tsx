import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import TopBar from "../components/TopBar/TopBar";
import NotificationBox from "../components/NotificationBox/NotificationBox";

const Weather: FunctionComponent = () => {

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
                    <div className={styles.WeatherHome}>
                        <div className={styles.wgraphArea}>
                            <div className={styles.tempgraph}>
                                <img
                                    className={styles.tempgraph}
                                    loading="eager"
                                    alt=""
                                    src="/TemperatureHumidiy.png"
                                />
                            </div>
                            <div className={styles.tempgraph}>
                                <img
                                    className={styles.tempgraph}
                                    loading="eager"
                                    alt=""
                                    src="/TemperatureHumidiy.png"
                                />
                            </div>
                            <div className={styles.tempgraph}>
                                <img
                                    className={styles.tempgraph}
                                    loading="eager"
                                    alt=""
                                    src="/TemperatureHumidiy.png"
                                />
                            </div>
                        </div>
                        <div className={styles.Weatherrighsection}>
                            <div className={styles.otherparameterscard}>
                                <img
                                    className={styles.OtherParameters}
                                    loading="eager"
                                    alt=""
                                    src="/OtherParameters.png"
                                />
                            </div>
                            <NotificationBox />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Weather;

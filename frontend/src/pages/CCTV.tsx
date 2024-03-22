import React, { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DashBoard.module.css";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import TopBar from "../components/TopBar/TopBar";
import NotificationBox from "../components/NotificationBox/NotificationBox";
import CCTVarea from "../components/CCTVarea/CCTVarea";

const CCTV: FunctionComponent = () => {
    const camUrls = [
        'http://192.168.0.182:8080/video',
        'http://192.168.0.133:5000/video_feed',
        'http://192.168.0.176:8080/video',
        'http://192.168.0.121:8080/video',
        'http://192.168.0.197:8080/video',
        'http://192.168.0.162:8080/video',
    ];

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
                    <div className={styles.cctvBody}>
                        <div className={styles.cctvAreacomp}>
                            <CCTVarea camUrls={camUrls} />
                        </div>
                        <div className={styles.cctvrightSection}>
                            <div className={styles.cctvInfoBox}>
                                <img
                                    className={styles.cctvInfoBoxImg}
                                    loading="eager"
                                    alt=""
                                    src="/cctvInfoBox.png"
                                />
                            </div>
                            <div className={styles.NotificationBoxInCCTV}>
                                <NotificationBox />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CCTV;





//  --------------------    working code


// import { FunctionComponent } from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
// import styles from "./DashBoard.module.css";
// import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
// import TopBar from "../components/TopBar/TopBar";
// import NotificationBox from "../components/NotificationBox/NotificationBox";

// const CCTV: FunctionComponent = () => {

//     const camUrl = 'http://192.168.0.176:8080/video';
//     return (
//         <div className={styles.dashboard}>
//             <main className={styles.background}>
//                 <div className={styles.backgroundChild} />
//                 <div className={styles.iconFrame}>
//                     <Sidebar />
//                     <NeedHelpBox />
//                 </div>
//                 <section className={styles.frameParent}>
//                     <TopBar />
//                     <div className={styles.cctvBody}>
//                         <div className={styles.cctvArea}>
//                                 <div className={styles.background2} >
//                                     <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
//                                 </div>
//                                 <div className={styles.background3} >
//                                     <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
//                                 </div>
//                                 <div className={styles.background3} >
//                                     <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
//                                 </div>
//                                 <div className={styles.background3} >
//                                     <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
//                                 </div>
//                         </div>
//                         <div className={styles.rightSection}>
//                             <div className={styles.InfoBox}>
//                                 <img
//                                     className={styles.cctvInfoBox}
//                                     loading="eager"
//                                     alt=""
//                                     src="/cctvInfoBox.png"
//                                 />
//                             </div>
//                             <NotificationBox />
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default CCTV;

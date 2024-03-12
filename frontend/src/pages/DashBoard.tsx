import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NeedHelpBox from "../components/NeedHelpBox/NeedHelpBox";
import DashboardFirstFrame from "../components/DashboardFirstFrame/DashboardFirstFrame";
import SecondFrame from "../components/DashboardSecondFrame/SecondFrame";
import DashboardThirdFrame from "../components/DashboardThirdFrame/DashboardThirdFrame";
import styles from "./DashBoard.module.css";
import TopBar from "../components/TopBar/TopBar";

const DashBoard: FunctionComponent = () => {

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
          <DashboardFirstFrame />
          <SecondFrame />
          <DashboardThirdFrame camUrl={camUrl} />
        </section>
      </main>
    </div>
  );
};

export default DashBoard;

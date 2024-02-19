import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Backgroundlivestock from "../components/Backgroundlivestock";
import Rainfall from "../components/Rainfall";
import styles from "./DashBoard.module.css";

const DashBoard: FunctionComponent = () => {

  const camUrl = 'http://192.168.0.176:8080/video';
  return (
    <div className={styles.dashboard}>
      <main className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.iconFrame}>
          <Sidebar />
          <GroupComponent />
        </div>
        <section className={styles.frameParent}>
          <FrameComponent />
          <Backgroundlivestock />
          <Rainfall camUrl={camUrl} />
        </section>
      </main>
    </div>
  );
};

export default DashBoard;

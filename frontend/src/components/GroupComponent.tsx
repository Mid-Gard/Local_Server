import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.backgroundParent}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.icon}>
        <div className={styles.iconChild} />
        <img
          className={styles.ioniconhhelpcircle}
          loading="eager"
          alt=""
          src="/ioniconhhelpcircle.svg"
        />
      </div>
      <div className={styles.needHelpParent}>
        <div className={styles.needHelp}>Need help?</div>
        <div className={styles.pleaseCheckOur}>Please check our docs</div>
      </div>
    </div>
  );
};

export default GroupComponent;

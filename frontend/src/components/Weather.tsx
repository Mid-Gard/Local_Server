import { FunctionComponent } from "react";
import styles from "./Weather.module.css";

const Weather: FunctionComponent = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.secondCard} />
      <div className={styles.weather1}>Weather</div>
      <img
        className={styles.ioniconccarddefault}
        loading="eager"
        alt=""
        src="/ioniconccarddefault.svg"
      />
    </div>
  );
};

export default Weather;

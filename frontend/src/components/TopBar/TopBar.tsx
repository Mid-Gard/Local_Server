import { FunctionComponent } from "react";
import styles from "./TopBar.module.css";
import { TextField } from "@mui/material";

const TopBar: FunctionComponent = () => {
    return (
        <div className={styles.backgroundParent}>
            <div className={styles.background}>
                <img
                    className={styles.frameIcon}
                    loading="eager"
                    alt=""
                    src="/rectangle-596@2x.png"
                />
                <h3 className={styles.aarasFarm}>AARAS Farm</h3>
                <div className={styles.saturday10thFebruary}>
                    Saturday, 10th February 2024
                </div>
            </div>
            <div className={styles.frameWrapper}>
                <div className={styles.inputwithaddonsParent}>
                    <TextField
                        className={styles.inputwithaddons}
                        placeholder="Type here..."
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <img width="15px" height="15px" src="/icon.svg" />
                            ),
                        }}
                        sx={{
                            "& fieldset": { borderColor: "rgba(226, 232, 240, 0.3)" },
                            "& .MuiInputBase-root": {
                                height: "27.4px",
                                backgroundColor: "#10350f",
                                paddingLeft: "11px",
                                borderRadius: "15.000000953674316px",
                                fontSize: "12px",
                            },
                            "& .MuiInputBase-input": {
                                paddingLeft: "11px",
                                color: "#a0aec0",
                            },
                        }}
                    />
                    <div className={styles.icon}>
                        <div className={styles.listitemdefault}>
                            <div className={styles.frameTitle}>
                                <div className={styles.iconFrame}>
                                    <img
                                        className={styles.ioniconppersondefault}
                                        alt=""
                                        src="/ioniconppersondefault-1.svg"
                                    />
                                </div>
                            </div>
                            <div className={styles.frameFrame}>
                                <div className={styles.livestockOutsideFrame}>
                                    <div className={styles.signIn}>Sign In</div>
                                </div>
                            </div>
                        </div>
                        <img
                            className={styles.ioniconssettingssharp}
                            alt=""
                            src="/ioniconssettingssharp.svg"
                        />
                        <img
                            className={styles.ioniconnnotificationsdefaul}
                            alt=""
                            src="/ioniconnnotificationsdefault.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

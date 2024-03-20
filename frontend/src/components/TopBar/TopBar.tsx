import { FunctionComponent, useCallback, useState, useEffect } from "react";
import styles from "./TopBar.module.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const TopBar: FunctionComponent = () => {
    const [currentDateTime, setCurrentDateTime] = useState<string>("");

    const onIconClick = useCallback(() => {
        // Please sync "Report Tab" to the project
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const formattedDateTime = `${now.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
            })}, ${now.toLocaleTimeString("en-US")}`;
            setCurrentDateTime(formattedDateTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.backgroundParent}>
            <div className={styles.background}>
                <div className={styles.aarasFarm}>AARAS Farm - Farmagudi Goa</div>
                <div className={styles.datetime}>{currentDateTime}</div>
            </div>
            <div className={styles.frameWrapper}>
                <div className={styles.inputwithaddonsParent}>
                    <TextField
                        className={styles.inputwithaddons}
                        placeholder="Type here..."
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <img width="15px" height="15px" src="/icon.svg" alt="icon" className={styles.searchIcon} />
                            ),
                        }}
                    />
                    <div className={styles.icon}>
                        <div className={styles.listitemdefault}>
                            <Button
                                className={styles.settingIcon}
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    color: "#fff",
                                    background: "none",
                                    "&:hover": { background: "#0075ff" },
                                }}
                                onClick={onIconClick}
                            >
                                <img
                                    className={styles.ioniconssettingssharp}
                                    alt=""
                                    src="/ioniconppersondefault-1.svg"
                                />
                            </Button>
                            <div className={styles.signIntext}>Sign In</div>
                        </div>
                        <Button
                            className={styles.settingIcon}
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#fff",
                                background: "none",
                                "&:hover": { background: "#0075ff" },
                            }}
                            onClick={onIconClick}
                        >
                            <img
                                className={styles.ioniconssettingssharp}
                                alt=""
                                src="/ioniconssettingssharp.svg"
                            />
                        </Button>

                        <Button
                            className={styles.settingIcon}
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                color: "#fff",
                                background: "none",
                                "&:hover": { background: "#0075ff" },
                            }}
                            onClick={onIconClick}
                        >
                            <img
                                className={styles.ioniconssettingssharp}
                                alt=""
                                src="/ioniconnnotificationsdefault.svg"
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "@mui/material";
import styles from "./AGVparams.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";


interface cctvCamfeedProps {
    camUrl: string;
}

function AGVparams() {
    const onTablesContainerClick = useCallback(() => {
        // Please sync "LiveStock Tab" to the project
    }, []);

    const onViewAllClick = useCallback(() => {
        // Please sync "CCTV Tab" to the project
    }, []);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles.background}>
            <div className={styles.title}>
                AGV Parameters
            </div>
        </div>
    );
};

export default AGVparams;

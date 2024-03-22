import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "@mui/material";
import styles from "./IrrigationMap.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";

function IrrigationMap() {
    const onTablesContainerClick = useCallback(() => {
        // Please sync "LiveStock Tab" to the project
    }, []);

    const onViewAllClick = useCallback(() => {
        // Please sync "CCTV Tab" to the project
    }, []);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={styles.background}>
            <img
                className={styles.avghumiditygraphImg}
                loading="eager"
                alt=""
                src="/AverageMoistureGraph.png"
            />
        </div>
    );
};

export default IrrigationMap;

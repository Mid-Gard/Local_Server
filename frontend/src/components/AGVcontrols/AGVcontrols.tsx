import { useState, useEffect } from "react";
import styles from "./AGVcontrols.module.css";

function AGVcontrols() {
    const [isForwardPressed, setIsForwardPressed] = useState(false);
    const [isRightPressed, setIsRightPressed] = useState(false);
    const [isBackwardPressed, setIsBackwardPressed] = useState(false);
    const [isLeftPressed, setIsLeftPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                    setIsForwardPressed(true);
                    sendRequest('forward');
                    break;
                case 'ArrowRight':
                    setIsRightPressed(true);
                    sendRequest('right');
                    break;
                case 'ArrowDown':
                    setIsBackwardPressed(true);
                    sendRequest('backward');
                    break;
                case 'ArrowLeft':
                    setIsLeftPressed(true);
                    sendRequest('left');
                    break;
                default:
                    break;
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                    setIsForwardPressed(false);
                    sendRequest('stop');
                    break;
                case 'ArrowRight':
                    setIsRightPressed(false);
                    sendRequest('stop');
                    break;
                case 'ArrowDown':
                    setIsBackwardPressed(false);
                    sendRequest('stop');
                    break;
                case 'ArrowLeft':
                    setIsLeftPressed(false);
                    sendRequest('stop');
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const sendRequest = (endpoint: string) => {
        fetch(`http://192.168.0.106:5000/${endpoint}`, { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleMouseDown = (direction: string) => {
        switch (direction) {
            case 'forward':
                setIsForwardPressed(true);
                sendRequest('forward');
                break;
            case 'right':
                setIsRightPressed(true);
                sendRequest('right');
                break;
            case 'backward':
                setIsBackwardPressed(true);
                sendRequest('backward');
                break;
            case 'left':
                setIsLeftPressed(true);
                sendRequest('left');
                break;
            case 'stop':
                sendRequest('stop');
                break;
            default:
                break;
        }
    };

    const handleMouseUp = (direction: string) => {
        switch (direction) {
            case 'forward':
                setIsForwardPressed(false);
                sendRequest('stop');
                break;
            case 'right':
                setIsRightPressed(false);
                sendRequest('stop');
                break;
            case 'backward':
                setIsBackwardPressed(false);
                sendRequest('stop');
                break;
            case 'left':
                setIsLeftPressed(false);
                sendRequest('stop');
                break;
            default:
                sendRequest('stop');
                break;
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.title}>
                Buttons
            </div>
            <div className={styles.motionButtons}>
                <div className={styles.arrowbtns} >
                    <button
                        className={styles.leftbtn}
                        onMouseDown={() => handleMouseDown('left')}
                        onMouseUp={() => handleMouseUp('left')}
                    >
                    </button>
                    <button
                        className={styles.forwardbtn}
                        onMouseDown={() => handleMouseDown('forward')}
                        onMouseUp={() => handleMouseUp('forward')}
                    >
                    </button>
                    <button
                        className={styles.backwardbtn}
                        onMouseDown={() => handleMouseDown('backward')}
                        onMouseUp={() => handleMouseUp('backward')}
                    >
                    </button>
                    <button
                        className={styles.rightdbtn}
                        onMouseDown={() => handleMouseDown('right')}
                        onMouseUp={() => handleMouseUp('right')}
                    >
                    </button>
                </div>
                <div className={styles.extrabtns}>
                    <button
                        className={styles.stopbtn}
                        onMouseDown={() => handleMouseDown
                        ('stop')}
                        onMouseUp={() => handleMouseUp('stop')}
                        ></button>
                    <button
                        className={styles.slowbtn}
                        onMouseDown={() => handleMouseDown
                            ('stop')}
                        onMouseUp={() => handleMouseUp('stop')}
                    >slow</button>
                    <button
                        className={styles.mediumbtn}
                        onMouseDown={() => handleMouseDown
                            ('stop')}
                        onMouseUp={() => handleMouseUp('stop')}
                    >mid</button>
                    <button
                        className={styles.fastbtn}
                        onMouseDown={() => handleMouseDown
                            ('stop')}
                        onMouseUp={() => handleMouseUp('stop')}
                    >Fast</button>
                </div>
            </div>
        </div>
    );
}

export default AGVcontrols;
















// import { FunctionComponent, useCallback, useState } from "react";
// import { Button } from "@mui/material";
// import styles from "./AGVcontrols.module.css";
// import { Link } from "react-router-dom";
// import Livestock from "../../pages/Livestock";

// function AGVcontrols() {
//     const onTablesContainerClick = useCallback(() => {
//         // Please sync "LiveStock Tab" to the project
//     }, []);

//     const onViewAllClick = useCallback(() => {
//         // Please sync "CCTV Tab" to the project
//     }, []);
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className={styles.background}>
//             <div className={styles.title}>
//                 Buttons
//             </div>
//             <div className={styles.motionButtons}>
//                 <button className={styles.forwardbtn}>
//                     Forward
//                 </button>
//                 <button className={styles.rightdbtn}>
//                     Right
//                 </button>
//                 <button className={styles.backwardbtn}>
//                     Backward
//                 </button>
//                 <button className={styles.leftbtn}>
//                     Left
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AGVcontrols;

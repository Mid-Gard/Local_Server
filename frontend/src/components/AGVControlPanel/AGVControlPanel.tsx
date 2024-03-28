import { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./ControlPanel.module.css";



const AGVControlPanel: FunctionComponent = () => {

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
        case '(blank space)':
          sendRequest('stop');
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
        case '(blank space)':
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
    <div className={styles.controlpanel}>
      <div className={styles.maincontent}>
        <div className={styles.controlPanel}>Control Panel</div>
        <div className={styles.allcarbtns}>
          <div className={styles.speedcontrolbtns}>
            <Button
              className={styles.slowbtn}
              disableElevation={true}
              color="primary"
              variant="contained"
            >
              SLOW
            </Button>
            <Button
              className={styles.fastbtn}
              disableElevation={true}
              color="primary"
              variant="contained"
            >
              FAST
            </Button>
            <Button
              className={styles.midbtn}
              disableElevation={true}
              color="primary"
              variant="contained"
            >
              MID
            </Button>
          </div>
          <div className={styles.directioncontrolbtns}>
            <div className={styles.buttons}>
              <div className={styles.topsection}>
                <img
                  className={styles.topsectionChild}
                  alt=""
                  src="/NE.svg"
                />
                <button
                  className={styles.forwardbtn}
                  onMouseDown={() => handleMouseDown('forward')}
                  onMouseUp={() => handleMouseUp('forward')}
                >
                  <img
                    className={styles.topsectionItem}
                    alt=""
                    src="/polygon-5.svg"
                  />
                </button>
                <img
                  className={styles.topsectionChild}
                  alt=""
                  src="/polygon-12.svg"
                />
              </div>
              <div className={styles.middlesection}>
                <button
                  className={styles.leftbtn}
                  onMouseDown={() => handleMouseDown('left')}
                  onMouseUp={() => handleMouseUp('left')}
                >
                  <img
                    className={styles.MiddlesectionItem}
                    alt=""
                    src="/polygon-8.svg"
                  />
                </button>
                <Button
                  className={styles.stopBtn}
                  onMouseDown={() => handleMouseDown('stop')}
                  onMouseUp={() => handleMouseUp('stop')}
                  disableElevation={true}
                  color="primary"
                  variant="contained"
                >
                  STOP
                </Button>
                <button
                  className={styles.rightdbtn}
                  onMouseDown={() => handleMouseDown('right')}
                  onMouseUp={() => handleMouseUp('right')}
                >
                  <img
                    className={styles.MiddlesectionItem}
                    alt=""
                    src="/polygon-7.svg"
                  />
                </button>
              </div>
              <div className={styles.bottomsection}>
                <img
                  className={styles.topsectionChild}
                  alt=""
                  src="/polygon-10.svg"
                />
                <button
                  className={styles.backwardbtn}
                  onMouseDown={() => handleMouseDown('backward')}
                  onMouseUp={() => handleMouseUp('backward')}
                >
                  <img
                    className={styles.topsectionItem}
                    alt=""
                    src="/polygon-6.svg"
                  />
                </button>
                <img
                  className={styles.topsectionChild}
                  alt=""
                  src="/polygon-9.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AGVControlPanel;

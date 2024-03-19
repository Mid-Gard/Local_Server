// --------------- by phind, using htmlCanvas module

import { FunctionComponent, useCallback, useState } from "react";
import { Button } from "@mui/material";
import styles from "./AGVvideo.module.css";
import html2canvas from 'html2canvas'; // Import html2canvas
import { useEffect } from "react";

interface cctvCamfeedProps {
    camUrl: string;
}

function AGVvideoFeed({ camUrl }: cctvCamfeedProps) {
    const [screenCapture, setScreenCapture] = useState<string>('');

    const handleScreenCapture = async () => {
        const imgElement = document.querySelector('.video_image') as HTMLImageElement;
        if (imgElement) {
            const canvas = await html2canvas(imgElement);
            const base64Source = canvas.toDataURL('image/png');
            setScreenCapture(base64Source);
            localStorage.setItem('capturedImage', base64Source); // Save to local storage
            console.log(localStorage.getItem('capturedImage'));

        }
    };

    useEffect(() => {
        const handleSave = () => {
            const downloadLink = document.createElement('a');
            const fileName = 'react-screen-capture.png';

            downloadLink.href = screenCapture;
            downloadLink.download = fileName;
            downloadLink.click();
        };

        if (screenCapture) {
            handleSave();
        }
    }, [screenCapture]);

    return (
        <div className={styles.background}>
            <div className={styles.background1}>
                <div className={styles.notifications}>
                    <h3 className={styles.FeedTitle}>AGV IR Camera Feed</h3>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.background2}>
                    <img src={camUrl} alt='video' className={styles.video_image} />
                    <Button onClick={handleScreenCapture} className={styles.startrecord}>Capture</Button>
                </div>
            </div>
        </div>
    );
};

export default AGVvideoFeed;





// ----------------- Not working using ScreenCapture module.

// import { FunctionComponent, useCallback, useState } from "react";
// import { Button } from "@mui/material";
// import styles from "./AGVvideo.module.css";
// import { ScreenCapture } from "react-screen-capture"; // Import the ScreenCapture component
// import { useEffect } from "react";

// interface cctvCamfeedProps {
//     camUrl: string;
// }

// function AGVvideoFeed({ camUrl }: cctvCamfeedProps) {
//     const [screenCapture, setScreenCapture] = useState<string>('');

//     const handleScreenCapture = (base64Source: string) => {
//         setScreenCapture(base64Source);
//         return null;
//     };

//     useEffect(() => {
//         const handleSave = () => {
//             const downloadLink = document.createElement('a');
//             const fileName = 'react-screen-capture.png';

//             downloadLink.href = screenCapture;
//             downloadLink.download = fileName;
//             downloadLink.click();
//         };

//         if (screenCapture) {
//             handleSave();
//         }
//     }, [screenCapture]);

//     return (
//         <div className={styles.background}>
//             <div className={styles.background1}>
//                 <div className={styles.notifications}>
//                     <h3 className={styles.FeedTitle}>AGV IR Camera Feed</h3>
//                 </div>
//             </div>
//             <div className={styles.contentWrapper}>
//                 <div className={styles.background2}>
//                     <ScreenCapture onEndCapture={handleScreenCapture}>
//                         {({ onStartCapture }: { onStartCapture: () => null }) => (
//                             <div>
//                                 <button onClick={onStartCapture} className={styles.startrecord}>Capture</button>
//                                 <img src={camUrl} alt='video' className={styles.video_image} />
//                             </div>
//                         )}
//                     </ScreenCapture>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AGVvideoFeed;



// -----------------  working code : 

// import { FunctionComponent, useCallback, useState } from "react";
// import { Button } from "@mui/material";
// import styles from "./AGVvideo.module.css";
// import { Link } from "react-router-dom";
// import Livestock from "../../pages/Livestock";


// interface cctvCamfeedProps {
//     camUrl: string;
// }

// function AGVvideoFeed({ camUrl }: cctvCamfeedProps) {
//     const onTablesContainerClick = useCallback(() => {
//         // Please sync "LiveStock Tab" to the project
//     }, []);

//     const onViewAllClick = useCallback(() => {
//         // Please sync "CCTV Tab" to the project
//     }, []);
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className={styles.background}>
//             <div className={styles.background1}>
//                 <div className={styles.notifications}>
//                     <h3 className={styles.FeedTitle}>AGV IR Camera Feed</h3>
//                 </div>
//             </div>
//             <div className={styles.contentWrapper}>
//                 <div className={styles.background2} >
//                     {/* <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} style={{ clipPath: 'inset(3% 12% 0 17%)' }} /> */}
//                     <img id="browser_video" className={styles.video_image} alt="video" src={camUrl} />
//                 </div>
//                 <div className={styles.buttonsbox}>
//                     <button className={styles.startrecord}>Capture</button>
//                     <button className={styles.startrecord}>Start Recording</button>
//                     <button className={styles.startrecord}>Start Recording</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AGVvideoFeed;
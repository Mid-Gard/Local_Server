import { FunctionComponent, useCallback, useState, useRef } from "react";
import { Button } from "@mui/material";
import styles from "./AGVvideo.module.css";
import { Link } from "react-router-dom";
import Livestock from "../../pages/Livestock";

interface cctvCamfeedProps {
    camUrl: string;
}

function AGVvideoFeed({ camUrl }: cctvCamfeedProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const chunks = useRef<Blob[]>([]);

    const startRecording = () => {
        if (!videoRef.current) return;

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                mediaRecorder.current = new MediaRecorder(stream);
                chunks.current = [];

                mediaRecorder.current.ondataavailable = (event) => {
                    chunks.current.push(event.data);
                };

                mediaRecorder.current.onstop = () => {
                    const blob = new Blob(chunks.current, { type: 'video/webm' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'recorded-video.webm';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                };

                mediaRecorder.current.start();
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });
    };

    const stopRecording = () => {
        mediaRecorder.current?.stop();
    };

    const captureScreenshot = () => {
        if (!videoRef.current) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
            if (!blob) return;

            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'screenshot.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
    };

    return (
        <div className={styles.background}>
            <div className={styles.background1}>
                <div className={styles.notifications}>
                    <h3 className={styles.FeedTitle}>AGV IR Camera Feed</h3>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.background2}>
                    <video
                        id="browser_video"
                        className={styles.video_image}
                        src={camUrl}
                        ref={videoRef}
                        autoPlay
                    />
                </div>
                <div className={styles.buttonsbox}>
                    <button className={styles.startrecord} onClick={captureScreenshot}>Capture</button>
                    <button className={styles.startrecord} onClick={startRecording}>Start Recording</button>
                    <button className={styles.startrecord} onClick={stopRecording}>Stop Recording</button>
                </div>
            </div>
        </div>
    );
};

export default AGVvideoFeed;

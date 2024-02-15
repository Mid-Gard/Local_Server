"use client"

// Import necessary dependencies
import { useState } from 'react'
import "./index.css"

interface cctvCamfeedProps {
    camUrl: string;
}

// Define the cctvCamfeed component
function CCTVCamfeed({ camUrl }: cctvCamfeedProps) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='cctv-card'>
            <div className='video_pane'>
                <img id="browser_video" className="video-image" alt="video" src={camUrl} style={{ width:'38rem' }} />
            </div>
        </div>
    )
}

export { CCTVCamfeed }

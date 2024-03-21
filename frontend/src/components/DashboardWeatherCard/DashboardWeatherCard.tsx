// --------------- New code by GPT for the rotating compass


import { FunctionComponent, useCallback, useState, useEffect } from "react";
import styles from "./DashboardWeatherCard.module.css";

interface WeatherData {
    temperature: number;
    humidity: number;
    wind_speed: number;
    wind_direction: string;
    rain_gauge: number;
}

const DashboardWeatherCard: FunctionComponent = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://192.168.0.186:8000/weatherstation/weather_view/");
                const data = await response.json();
                setWeatherData(data.weather_data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 100); // Fetch data every minute
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const onViewAllClick = useCallback(() => {
        // Handle see all button click
    }, []);

    const getWindDirectionDegree = (direction: string): number => {
        switch (direction) {
            case "N":
                return 0;
            case "NE":
                return 45;
            case "E":
                return 90;
            case "SE":
                return 135;
            case "S":
                return 180;
            case "SW":
                return 225;
            case "W":
                return 270;
            case "NW":
                return 315;
            default:
                return 0;
        }
    };

    return (
        <div className={styles.weatherReportCard}>
            <div className={styles.header}>
                <div className={styles.weathercardtitle}>Weather Report</div>
                <button onClick={onViewAllClick}>See All</button>
            </div>
            <div className={styles.weatherParams}>
                {weatherData && (
                    <>
                        <div className={styles.paramsColumn}>
                            <div className={styles.param}>
                                <div className={styles.paramTitle}>Temperature</div>
                                <div className={styles.paramvalues}>{weatherData.temperature}°C</div>
                            </div>
                            <div className={styles.param}>
                                <div className={styles.paramTitle}>Humidity</div>
                                <div className={styles.paramvalues}>{weatherData.humidity}%</div>
                            </div>
                            <div className={styles.param}>
                                <div className={styles.paramTitle}>Rain Gauge</div>
                                <div className={styles.paramvalues}>{weatherData.rain_gauge}</div>
                            </div>
                        </div>
                        <div className={styles.windSection}>
                            <div className={styles.windSpeed}>
                                <div className={styles.paramTitle}>Wind Speed</div>
                                <div className={styles.paramvalues}>{weatherData.wind_speed.toFixed(2)} m/s</div>
                            </div>
                            <div className={styles.windDirection}>
                                <div className={styles.paramTitle}>Wind Direction</div>
                                <div className={styles.compass} style={{ transform: `rotate(${getWindDirectionDegree(weatherData.wind_direction)}deg)` }} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default DashboardWeatherCard;












// --------------- WOrking code, just to show the image


// // I have commented the css of the maincontent div for now to show the image, afterwards uncomment it back

// import { FunctionComponent, useCallback, useState } from "react";
// import styles from "./DashboardWeatherCard.module.css";
// import { Link } from "react-router-dom";
// import Livestock from "../../pages/Livestock";

// function DashboardWeatherCard() {
//     const onTablesContainerClick = useCallback(() => {
//         // Please sync "LiveStock Tab" to the project
//     }, []);

//     const onViewAllClick = useCallback(() => {
//         // Please sync "CCTV Tab" to the project
//     }, []);
//     const [showMore, setShowMore] = useState(false);

//     return (
//         <div className={styles.weatherreportcard}>
//             <img
//                 className={styles.weathercardimg}
//                 loading="eager"
//                 alt=""
//                 src="/DashboardWeatherCard.png"
//             />
//             <div className={styles.maincontent}>   
//                 {/* <div className={styles.frame}>
//                 <div className={styles.title}>Weather Report</div>
//                 <div className={styles.seeallbutton}>
//                     <div className={styles.wrapperRectangle3}>
//                         <img
//                             className={styles.wrapperRectangle3Child}
//                             alt=""
//                             src="/rectangle-3.svg"
//                         />
//                     </div>
//                     <div className={styles.seeAll}>See all</div>
//                 </div>
//             </div>
//             <div className={styles.frame1}>
//                 <div className={styles.frame2}>
//                     <div className={styles.frame3}>
//                         <div className={styles.firstdesign}>
//                             <div className={styles.firstdesignbackground}>
//                                 <img
//                                     className={styles.subtractIcon}
//                                     alt=""
//                                     src="/seconddesignbackground@2x.png"
//                                 />
//                                 <div className={styles.firstdesignbackgroundChild} />
//                             </div>
//                             <div className={styles.firstdesigntext}>
//                                 <b className={styles.humid}>77% Humid</b>
//                                 <div className={styles.c}>37 °C</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.frame4}>
//                         <div className={styles.seconddesign}>
//                             <img
//                                 className={styles.seconddesignbackgroundIcon}
//                                 alt=""
//                                 src="/seconddesignbackground@2x.png"
//                             />
//                             <div className={styles.seconddesigntext}>
//                                 <b className={styles.thisMonth07Container}>
//                                     <p className={styles.thisMonth}>77” This month</p>
//                                     <p className={styles.today}>0.7” Today</p>
//                                 </b>
//                                 <b className={styles.rainfall}>Rainfall</b>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//             </div>
//         </div>
//     );
// };

// export default DashboardWeatherCard;




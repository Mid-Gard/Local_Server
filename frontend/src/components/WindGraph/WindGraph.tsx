import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js'; // Import Plotly from plotly.js

// Define the interface for the weather data
interface WeatherData {
    wind_speed?: number;
    runningTime?: string;
    temperature?: number;
    garbage?: number;
    pressure?: number;
    wind_direction?: string;
    rain_gauge?: number;
    humidity?: number;
}

const WindGraph = () => {
    // Initialize the state with the WeatherData interface
    const [weatherData, setWeatherData] = useState<WeatherData>({});
    const [plotData, setPlotData] = useState([{
        x: [new Date()],
        y: [Math.random()],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
    }]);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://192.168.0.186:8000/weatherstation/weather_view/')
                .then(response => response.json())
                .then(data => {
                    const time = new Date();

                    const update1 = {
                        x: [time], // Adjusted to match the expected format
                        y: [data.weather_data.temperature], // Adjusted to match the expected format
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                        line: {WaveShaperNode: 'spline'}
                    };

                    // Directly update the state to reflect changes in the plot
                    setPlotData(prevData => [...prevData, update1]);
                    setWeatherData(data.weather_data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData();
        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Plot
                data={plotData}
                layout={{ width: 1000, height: 240, title: 'Real-time Weather Data' }}
            />
        </div>
    );
};

export default WindGraph;




// --- KInd of working


// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// // Define the interface for the weather data
// interface WeatherData {
//     wind_speed?: number;
//     runningTime?: string;
//     temperature?: number;
//     garbage?: number;
//     pressure?: number;
//     wind_direction?: string;
//     rain_gauge?: number;
//     humidity?: number;
// }

// const WindGraph = () => {
//     // Initialize the state with the WeatherData interface
//     const [weatherData, setWeatherData] = useState<WeatherData>({});
//     const [plotData, setPlotData] = useState([{
//         x: [new Date()],
//         y: [Math.random()],
//         type: 'scatter',
//         mode: 'lines+markers',
//         marker: { color: 'red' },
//     }]);

//     useEffect(() => {
//         const fetchData = () => {
//             fetch('http://192.168.0.186:8000/weatherstation/weather_view/')
//                 .then(response => response.json())
//                 .then(data => {
//                     const time = new Date();

//                     const update1 = {
//                         x: [time], // Adjusted to match the expected format
//                         y: [data.weather_data.temperature], // Adjusted to match the expected format
//                         type: 'scatter',
//                         mode: 'lines+marker',
//                         marker: { color: 'red' }
//                     };

//                     const olderTime = time.setMinutes(time.getMinutes() - 1);
//                     const futureTime = time.setMinutes(time.getMinutes() + 1);

//                     const minuteView = {
//                         xaxis: {
//                             type: 'date',
//                             range: [olderTime, futureTime]
//                         }
//                     };

//                     Plotly.relayout('graph1', minuteView);
//                     Plotly.extendTraces('graph1', update1, [0]);

//                     setPlotData(prevData => [...prevData, update1]);
//                     setWeatherData(data.weather_data);
//                 })
//                 .catch(error => console.error('Error fetching data:', error));
//         };

//         fetchData();
//         const intervalId = setInterval(fetchData, 1000);

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div>
//             {/* <h1>Real-time Weather Data</h1> */}
//             <Plot
//                 data={plotData}
//                 layout={{ width: 1000, height: 240, title: 'Real-time Weather Data' }}
//             />
//         </div>
//     );
// };

// export default WindGraph;






// --------------- Not working


// import { FunctionComponent, useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import styles from "./WindGraph.module.css";
// import { Chart, LinearScale, Title, Tooltip, Legend, BarElement, CategoryScale, ChartOptions, PointElement, LineElement, ChartType, Plugin } from 'chart.js';

// declare module 'chart.js' {
//     interface PluginOptionsByType<TType extends ChartType> {
//         latestValue?: {
//             id: string;
//             afterDraw: (chart: Chart<TType>, args: any, options: any) => void;
//         };
//     }
// }

// // Register the components
// Chart.register(LinearScale, Title, Tooltip, Legend, BarElement, CategoryScale, PointElement, LineElement);

// interface WeatherData {
//     wind_speed: number; // Assuming this is the property you're interested
// }

// interface WindGraphProps {
//     WeatherUrl: string;
// }

// const WindGraph: FunctionComponent<WindGraphProps> = ({ WeatherUrl }) => {
//     const [windSpeedData, setWindSpeedData] = useState<number[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(WeatherUrl);
//                 const data: WeatherData = await response.json();
//                 setWindSpeedData((prevData) => [...prevData, data.wind_speed]);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         const interval = setInterval(fetchData, 1000); // Fetch data every second
//         return () => clearInterval(interval); // Cleanup on unmount
//     }, [WeatherUrl]);

//     const chartData = {
//         labels: Array.from({ length: windSpeedData.length }, (_, i) => i + 1),
//         datasets: [
//             {
//                 label: "Wind Speed",
//                 data: windSpeedData,
//                 fill: false,
//                 borderColor: "rgb(75, 192, 192)",
//                 tension: 0.1,
//             },
//         ],
//     };

//     const chartOptions: ChartOptions<'line'> = {
//         scales: {
//             x: {
//                 type: 'linear',
//                 title: {
//                     display: true,
//                     text: 'Time'
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Wind Speed',
//                     font: {
//                         size: 10
//                     }
//                 }
//             }
//         },
//         plugins: {
//             legend: {
//                 display: false,
//                 position: 'top',
//             },
//             title: {
//                 display: false,
//                 text: 'Wind Speed Graph (inches)',
//                 font: {
//                     size: 10
//                 }
//             },
//             // Custom plugin to display the latest wind speed value
//             latestValue: {
//                 id: 'latestValue',
//                 afterDraw: (chart, args, options) => {
//                     const ctx = chart.ctx;
//                     const latestValue = windSpeedData[windSpeedData.length - 1];
//                     ctx.save();
//                     ctx.font = '16px Arial';
//                     ctx.fillStyle = 'black';
//                     ctx.fillText(`Latest: ${latestValue}`, 10, 25);
//                     ctx.restore();
//                 }
//             }
//         }
//     };

//     return (
//         <div className={styles.background1}>
//             <div className={styles.DashboardThirdFrameInchesFrame}>
//                 <div className={styles.viewAllFrame}>
//                     <h3 className={styles.DashboardThirdFrameInches}>Wind Speed Graph (inches)</h3>
//                     <div className={styles.icon2}>
//                         <div className={styles.vectorParent}>
//                             <img className={styles.frameChild} alt="" src="/rectangle-3.svg" />
//                             <h3 className={styles.monthwiseReport}> Monthwise Report</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.graphplot}>
//                 <Line data={chartData} options={chartOptions} />
//             </div>
//         </div>
//     );
// };

// export default WindGraph;

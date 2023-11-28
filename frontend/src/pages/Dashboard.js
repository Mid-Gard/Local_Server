import React, { useState, useEffect, useRef } from 'react';
// import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const [lines, setLines] = useState([]);
  const dataRef = useRef(null);

  const fetchData = () => {
    fetch('http://127.0.0.1:8000/livestock/livestock_view/')
      .then((response) => response.json())
      .then((data) => {
        const innerLivestockData = JSON.parse(data.livestock_data.livestock_data);
        setLines((prevLines) => [
          `Temperature: ${innerLivestockData.temperature}`,
          `Humidity: ${innerLivestockData.humidity}`,
          `Activity: ${innerLivestockData.activity}`,
          ...prevLines,
        ]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Scroll to the bottom when lines change
  useEffect(() => {
    if (dataRef.current) {
      dataRef.current.scrollTop = dataRef.current.scrollHeight;
    }
  }, [lines]);


  return (
    <div className="Dashboard">
      <div className="containerrr">
        <div className="Appcontainer">
          <div className="Appcontent">
            <h1>Livestock Monitoring App</h1>
          </div>
          <div>
        <Link href="/livestock">
          Livestock
        </Link>
      </div>
          <div className="newElement">
            <div ref={dataRef} style={{ overflowY: 'auto' }}>
              {lines.map((line, index) => (
                  <div key={index}>{line}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
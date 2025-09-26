import rankToColorMap from "./utils/rankToColorMap";
import Header from "./components/Header";
import Table from "./components/Table";
import BarChart from "./components/BarChart";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  
  const myUsername = "azeem";
  const myrank = "pupil";
  const color = rankToColorMap[myrank];
  const url = `https://cf-analytics-server.onrender.com/api/`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(url, {
          signal: abortController.signal
        });
        if(!response.ok) {
          throw new Error(`Network Error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        const jsonData = json.data;
        setData(jsonData);
      }
      catch(error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    }

  }, [url]);

  return (
    <>
      <Header username={myUsername} rank={myrank} color={color} />
      <div id="content">
        {loading ? (
          <p id="loading-message">Please wait while we load your data!</p>
        ) : error ? (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2 className="error-title">Oops! Something went wrong</h2>
            <p className="error-message">{error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : data ? (
          <>
            <div className="daily-stats-container">
              <p className="daily-stats-label">
                Average Problems Solved Daily: 
                <span className="daily-stats-data">{`${data.averageProblemsDaily}`}</span>
              </p>
              <p className="daily-stats-label">
                Practice Duration: 
                <span className="daily-stats-data">{`${data.practiceDuration} days`}</span>
              </p>
            </div>
            <Table tabularData={data.tabularData} />
            <BarChart problemsSolved={data.problemsSolved} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
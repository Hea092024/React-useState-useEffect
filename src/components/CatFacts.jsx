import { useState, useEffect } from "react";
import "../styles/CatFactsStyle.css";

export default function CatFacts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok)
          throw new Error(`HTTP error. Status ${response.status}`);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="cat-container">
      <h1>Cat Facts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data.length > 0 &&
        data.map((catFact, index) => <p key={index}>{catFact.fact}</p>)}
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";

const Fib = props => {
  const [index, setIndex] = useState("");
  const [values, setValues] = useState({});
  const [seenIndicies, setSeenIndicies] = useState([]);

  const fetchValues = async () => {
    const response = await axios.get("/api/values/current");
    setValues(response.data);
  };

  const fetchSeenIndicies = async () => {
    const response = await axios.get("/api/values/all");
    setSeenIndicies(response.data);
  };

  const renderSeenIndicies = () => {
    return seenIndicies.map(({ number }) => number).join(", ");
  };

  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }
    return entries;
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index
    });
    setIndex("");
  };

  useEffect(() => {
    fetchValues();
    fetchSeenIndicies();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index</label>
        <input value={index} onChange={event => setIndex(event.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndicies()}

      <h3>Calculated values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;

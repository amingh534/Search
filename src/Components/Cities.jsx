import React, { useState } from "react";
import cities from "../cities.json";
import styles from "./Cities.module.css";

function Cities() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [islowercase, setIsLowerCase] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value && value === value.toLowerCase()) {
      setIsLowerCase(true);
    } else {
      setIsLowerCase(false);
    }

    if (value) {
      const matches = cities.filter((city) => city.startsWith(value));
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.City}>
      <div className={styles.container}>
        
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter city name..."
        />
      </div>
      {islowercase && <p className={styles.warning}>Please write down uppercase!</p>}

      <ul className={styles.suggestionslist}>
        {suggestions.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;

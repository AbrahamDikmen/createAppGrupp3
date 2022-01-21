import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
export function SearchCity({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;

    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div id="search">
      <FormControl
        className="searchInputs"
        type="text"
        placeholder={placeholder}
        onChange={handleFilter}
      />

      {filteredData.length != 0 && (
        <div className="dataResults">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.image} target="_blank">
                <p> {value.city}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

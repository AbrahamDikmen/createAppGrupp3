import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "react-bootstrap";

export function SearchCity({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  const handleFilter = (event) => {
    setSearchWord(event.target.value);

    //  These here give us new arrays depending on what we have been searching for
    const searchWord = event.target.value;

    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    // Cleans the search filter if there is no text in the "search box"
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // This method also cleans the filter but does that through the x icon
  const clearInput = () => {
    setSearchWord("");
    setFilteredData([]);
  };

  return (
    <div id="search">
      <div className="wrapper">
        <FormControl
          className="searchInputs"
          placeholder="Ange en stad..."
          value={searchWord}
          onChange={handleFilter}
        />
        <CloseButton className="cleanBtn" onClick={clearInput} />
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div
                className="dataItem"
                key={key}
                target="_blank"
                onClick={() => navigate(`/${value.city}`)}
              >
                <p>{value.city}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "react-bootstrap";
export function SearchCity({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  // se det som såhär: [const searchWord,  setSearchWord()] , setSearchWord sätter ett nytt värde på searchWord.
  const navigate = useNavigate();

  const handleFilter = (event) => {
    setSearchWord(event.target.value);

    // ger oss en ny array av det vi sökt på
    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
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
              <a
                key={key}
                className="dataItem"
                target="_blank"
                onClick={() => navigate(`/${value.city}`)}
              >
                <p>{value.city}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "../Styles/addCityForm.css";
import jsonfiles from "../jsonfiles/cities-timezones.json";
// Custom hook, accepts an object corresponding to the 'initialState' input parameter.
const useStates = (initialState = {}) => {
  let [states, setStates] = useState(initialState);
  return [
    states,
    (changes) => {
      setStates({ ...states, ...changes });
    },
  ];
};

async function getTimezones() {
  let rawData = await fetch("./src/jsonfiles/valid-timezones.json");
  let timezones = await rawData.json();
  return timezones;
}

const AddCityForm = () => {
  // Initialize values for an empty form.
  let emptyFormValues = {
    city: "",
    timezone: "",
    img: "",
  };

  // useStates hook to hold values from the form.
  const [formValues, setFormValues] = useStates({ ...emptyFormValues });

  const [alreadyExists, setAlreadyExists] = useState(false);
  const [invalidCity, setInvalidCity] = useState(false);

  let { city, timezone } = formValues;
  const [timeZones, setTimezones] = useStates(() => {
    let timezones = [];

    getTimezones().then((data) => {
      for (const prop in data) {
        timezones.push(data[prop].timezone);
      }
    });
    return timezones;
  });

  // A function that is called when the form is updated, sets values for the
  // formValues state variable
  const updateFormValue = (event) => {
    let { name, value } = event.target;
    setFormValues({ [name]: value });
  };

  // A function that handles form submits, calls function to save given input
  // to localStorage and calls function to reset the form.
  const handleSubmit = (event) => {
    event.preventDefault();
    writeToLocalStorage();
    resetForm();
  };

  // A function that sets the formValues state variable to the values of
  // the emptyFormValues variable.
  const resetForm = () => {
    setFormValues({ ...emptyFormValues });
  };

  let storedCities = [];

  // A function that parses the localStorage.storedCities field, assigns
  // storedCities the read values. If an error is raised while attempting
  // to parse the storedCities variable is assigned an empty array.
  const readLocalStorage = () => {
    try {
      storedCities = JSON.parse(localStorage.storedCities);
    } catch (error) {
      storedCities = [];
    }
  };
  readLocalStorage();

  // A function that pushes the values of the formValues state variable
  // to the storedCities array, then assigns localStorage.storedCities
  // a stringified JSON version of the storeCities.
  const writeToLocalStorage = () => {
    // Converting a jsonfile to code and then we loop through each city in the array
    // If there is an mach, return out of the function
    // If there is an mach, store the city into the localStorage

    const inputSpellCheck = jsonfiles.find(
      (item) => item.city === formValues.city
    );

    if (!inputSpellCheck) {
      setInvalidCity(true);
      setAlreadyExists(false);
      return;
    }

    const foundCity = JSON.parse(localStorage.storedCities).find(
      (i) => i.city === formValues.city
    );
    if (foundCity) {
      setAlreadyExists(true);
      setInvalidCity(false);
      return;
    }
    setInvalidCity(false);
    setAlreadyExists(false);
    storedCities.push(formValues);
    localStorage.storedCities = JSON.stringify(storedCities);
  };

  // decides the number of rows to be shown when clicking
  // on dropdown by changing its size property
  const setSize = (e) => (e.target.size = 5);
  // we need to call this function when we select/remove focus
  // from select element to make it behave like a regular dropdown
  const resetSize = (e) => (e.target.size = 0);

  return (
    <div className="form-wrapper">
      <h2>Lägg till stad</h2>

      <form onSubmit={handleSubmit}>
        <h3>Stad</h3>
        {alreadyExists && (
          <p style={{ color: "yellow" }}>⚠ Staden finns redan i dina städer.</p>
        )}
        {invalidCity && (
          <p style={{ color: "#FF0000" }}>⚠ Ogiltig stad, försök igen...</p>
        )}

        <input
          type="text"
          name="city"
          value={city}
          placeholder="Ange stad..."
          required
          maxLength="50"
          onChange={updateFormValue}
        />

        <h3>Tidszon</h3>
        <select
          name="timezone"
          id="select-timezone"
          onMouseDown={setSize}
          onChange={(e) => {
            updateFormValue(e);
            resetSize(e);
          }}
          onBlur={(e) => resetSize(e)}
          required
        >
          <option value="">Välj en tidszon</option>
          {timeZones.map((offset, i) => {
            return (
              <option value={offset} key={i}>
                {offset}
              </option>
            );
          })}
        </select>
        <br />
        <input type="submit" value="Lägg till" />
      </form>
    </div>
  );
};

export default AddCityForm;

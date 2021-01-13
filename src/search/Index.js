import React, { useEffect, useState } from "react";
import * as countryApi from "api/countryApi";
import CountryList from "./CountryList";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryApi.getCountries().then((x) => {
      setCountries(x[0]);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchCountries(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const searchCountries = (searchTerm) => {
    countryApi.getCountries().then((x) => {
      let data = x[0].filter(
        (item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
      );
      setCountries(data);
    });
  };

  const handleTextChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length === 0) {
      searchCountries(searchTerm);
    }
  };

  return (
    <>
      <div className="message">
        <strong>
          <ul>
            <li>
              Instead of calling api on each key press, this will call api when
              user stop typing. This will reduce database calls
            </li>
            <li>
              Type 'ang' and see result. notice that only one call is made to
              api
            </li>
            <li>json-server is used to get data from api</li>
          </ul>
        </strong>
      </div>
      <form>
        <input
          type="search"
          placeholder={"search authors"}
          id={"input-search"}
          value={searchTerm}
          onChange={(e) => handleTextChange(e)}
        />
      </form>
      {searchTerm && (
        <div className="result-count">
          <strong>Result count : {countries.length}</strong>
        </div>
      )}
      <CountryList countries={countries} />
    </>
  );
};

export default SearchBar;

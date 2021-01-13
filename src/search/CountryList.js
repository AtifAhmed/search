import React from "react";

const CountryList = ({ countries }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => {
          return (
            <tr key={country.code}>
              <td>{country.code}</td>
              <td>{country.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountryList;

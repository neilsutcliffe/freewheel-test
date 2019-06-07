import React from "react";

const BikePoint = ({ bikepoint }) => {
  const { id, commonName, lat, lon } = bikepoint;
  const no = id.split("_")[1];

  return (
    <li>
      {no} {commonName} ({lat},{lon})
    </li>
  );
};

const Results = ({ results, query }) => {
  if (results.length === 0) return <p>No bike points found for '{query}'</p>;

  return (
    <ul>
      {results.map(bikepoint => (
        <BikePoint bikepoint={bikepoint} key={results.indexOf(bikepoint)} />
      ))}
    </ul>
  );
};

export default Results;

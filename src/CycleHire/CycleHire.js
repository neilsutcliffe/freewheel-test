import React from "react";
import s from "./CycleHire.module.scss";
import api from "../api";

// Should this be in the state?
let cache = {};

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
  if (results.length == 0) return <p>No bike points found for '{query}'</p>;

  return (
    <ul>
      {results.map(bikepoint => (
        <BikePoint bikepoint={bikepoint} key={results.indexOf(bikepoint)} />
      ))}
    </ul>
  );
};

class CycleHire extends React.Component {
  constructor() {
    super();
    this.state = { query: "", loading: false, results: null };
  }

  search = () => {
    const { query } = this.state;

    if (cache[query] === undefined) {
      this.setState({ loading: true });

      api.searchBike(query).then(data => {
        this.setState({ loading: true });

        console.log(data);
        cache[query] = data;
        this.setState({
          loading: false,
          results: cache[query],
          searched: query
        });
      });
    } else {
      this.setState({
        loading: false,
        results: cache[query],
        searched: query
      });
    }
  };

  render = () => {
    const { results, searched } = this.state;

    console.log(results);

    return (
      <div className={s.cycleHire}>
        Cycle Hire
        <div className={s.search}>
          <input
            type="text"
            placeholder="Location"
            onChange={event => {
              this.setState({ query: event.target.value });
            }}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.search();
              }
            }}
            value={this.state.query}
          />
          <input type="button" value="Search" onClick={this.search} />
        </div>
        {results !== null ? (
          <Results results={results} query={searched} />
        ) : null}
      </div>
    );
  };
}

export default CycleHire;

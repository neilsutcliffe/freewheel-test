import "./App.css";
import React from "react";
import Lines from "./Lines/Lines";
import CycleHire from "./CycleHire/CycleHire";
import api from "./api";
import s from "./App.module.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentWillMount = () => {
    api.getData().then(data => {
      // We store all the photos. We limit on the display side as we need to filter.
      this.setState({ data });
    });
  };

  render = () => {
    const { data } = this.state;

    if (data == null) return <p>Loading...</p>;

    return (
      <div className="App">
        <div className={s.container}>
          <Lines lines={data} />
          <CycleHire />
        </div>
      </div>
    );
  };
}

export default App;

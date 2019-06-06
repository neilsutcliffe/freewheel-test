import React from "react";
import logo from "./assets/logo.png";
import "./App.css";
import Lines from "./Lines/Lines";
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

    console.log(data);

    if (data == null) return <p>Loading...</p>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Tigerspike Logo" />
        </header>
        <div className={s.container}>
          <Lines lines={data} />
        </div>
      </div>
    );
  };
}

export default App;

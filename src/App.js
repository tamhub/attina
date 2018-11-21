import React from "react";
import Tamtina from "../tamtina";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tamtina
          name="diagram"
          style={{ width: 500, height: 500 }}
          diagram="graph TD; A-->B; A-->C; B-->D; C-->D;"
        />
      </div>
    );
  }
}

export default App;

import React from "react";
import { mermaidAPI } from "mermaid";

function getDiagram(title, input, callback) {
  mermaidAPI.render(title, input, diagram => {
    callback({ diagram });
  });
}

class Attina extends React.Component {
  constructor(props) {
    super(props);
    mermaidAPI.initialize(props.config);

    this.state = {
      diagram: "Loading..."
    };
  }

  componentWillMount() {
    getDiagram(this.props.title, this.props.diagram, state =>
      this.setState(state)
    );
  }

  componentWillReceiveProps({ diagram }) {
    getDiagram(this.props.title, diagram, state => this.setState(state));
  }

  render() {
    const { ...props } = this.props;
    return (
      <div
        {...props}
        id="mermaid"
        dangerouslySetInnerHTML={{ __html: this.state.diagram }}
      />
    );
  }
}

Attina.defaultProps = {
  title: "diagram",
  frameBorder: 0
  config: {}
};

export default Attina;

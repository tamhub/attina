import React from "react"
import mermaid from "mermaid"

class Tamtina extends React.Component {
  constructor(props) {
    super(props)
    mermaid.initialize(props.config)
  }

  componentDidMount() {
    mermaid.contentLoaded()
  }

  render() {
    return <div className="mermaid">{this.props.diagram}</div>
  }
}

Tamtina.defaultProps = {
  config: {}
}

export default Tamtina

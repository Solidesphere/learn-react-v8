import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCtach(error, info) {
    //typically you would log this to somthing like TrackJs or NewRelic
    console.log("ErrorBoundry compomnet caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          there was an error with this listing{" "}
          <Link to="/">Click here to go back to home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;

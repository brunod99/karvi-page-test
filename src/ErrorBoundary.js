import React, {Component} from 'react';
import Error from './components/Error/Error';

export default class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    // If there are no errors render
    // the child components
    if (!this.state.errorInfo) {
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }

    // Display custom UI if there are errors
    // in our application
    return (
      <Error>
        <h1>Something went wrong. Please look up in your console for more information.</h1>
      </Error>
    );
  }
}

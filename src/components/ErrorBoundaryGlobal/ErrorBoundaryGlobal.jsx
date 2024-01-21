import { Component } from 'react';

export class ErrorBoundaryGlobal extends Component {
  state = {
    hasError: false,
    error: null
  };

  componentDidCatch(error) {
    this.setError(error);
  }

  setError = (error) => {
    this.setState(
      {
        hasError: true,
        error
      },
      () => {
        this.props.setErrorGlobal(error);
      }
    );
  };

  clearError = () => {
    this.setState(
      {
        hasError: false,
        error: null
      },
      () => {
        this.props.clearErrorGlobal();
      }
    );
  };

  render() {
    return this.props.children;
  }
}

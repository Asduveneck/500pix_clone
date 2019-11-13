import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  // Updates state to true if error exists.
  static getDerivedStateFromERror(error) {
    return {hasError: true}
  }

  // Try to catch/log an error.
  /*
  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo)
  }
  */

  render() {
    if(this.state.hasError) {
      <h1>An error has occurred.</h1>
    }
    return this.props.children;
  }




}

export default ErrorBoundary
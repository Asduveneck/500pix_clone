import React from "react";

const App = () => (
  <div>
    <header>
      <h2> Within the App File </h2>

    </header>

    {/* Routes to use */}
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />

  </div>

);

export default App;
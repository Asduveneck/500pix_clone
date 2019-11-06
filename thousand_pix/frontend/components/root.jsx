import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom"; // links, routes, history, and syncs UI w/ the url. 
import App from "./App" // our main app

const Root = ( { store }) => (
  <Provider store={store}>  
    <HashRouter>
      <App />  
    </HashRouter> 
  </Provider>
);

export default Root;
import React from "react";
import "./App.css";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

const history = createHashHistory();

function App() {
  return (
    <div>
      <Navbar />
      <Router history={history}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

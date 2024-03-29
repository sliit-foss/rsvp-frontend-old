import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createHashHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { routes } from "./routes/AppRoutes";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";

const history = createHashHistory();
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Navbar />
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
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

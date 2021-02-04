import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

const history = createHashHistory();
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;

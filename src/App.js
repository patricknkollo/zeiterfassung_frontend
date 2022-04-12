import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Einsatz from "./components/Einsatz";
import Mitarbeiter from "./components/Mitarbeiter";
import MitarbeiterListing from "./components/MitarbeiterListing";
import EinsatzListing from "./components/EinsatzListing";
import MitarbeiterPage from "./components/MitarbeiterPage";
import MitarbeiterPages from "./components/MitarbeiterPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/employee/form">
            <Mitarbeiter />
          </Route>
          <Route path="/einsatz/form">
            <Einsatz />
          </Route>
          <Route path="/mitarbeiters/all">
            <MitarbeiterListing />
          </Route>
          <Route path="/einsaetze/all">
            <EinsatzListing />
          </Route>
          <Route
            exact
            path="/mitarbeiter/pages/:id"
            component={MitarbeiterPages}
          />
          <Route
            exact
            path="/mitarbeiter/page/:id"
            component={MitarbeiterPage}
          />
          <Route exact path="/mitarbeiter/page" component={MitarbeiterPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

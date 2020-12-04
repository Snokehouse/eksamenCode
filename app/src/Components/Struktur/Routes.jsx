import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home/Index';
import Kontorer from './Kontorer/Index';
import FagArtikler from './Fagartikler/Index';
import Kontakt from './Kontakt/Index';
import NoMatch from './NoMatch/Index';

const Routes = () => {
  const [inlogget, setInnlogget] = useState(false);
  const [inloggetData, setInnloggetData] = useState([]);

  return (
    <Router>
      {/* må sjekke og fikse denne så vi kan bruke component styling */}
      <MainLayout>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route exact path="/kontorer">
              <Kontorer/>
          </Route>
          <Route exact path="/fagartikler">
            <FagArtikler/>
          </Route>
          <Route exact path="/kontakt">
              <Kontakt/>
          </Route>
          <Redirect exact from="/" to="/home" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};
export default Routes;
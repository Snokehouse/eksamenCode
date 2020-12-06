import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from '../Styles/Layout/MainLayout';

import Home from './Home/Index';
import Kontorer from './Kontorer/KontorOversikt/Index';
import KontorSide from './Kontorer/KontorSide/Index';

import FagArtikler from './Fagartikler/ArtikkelOversikt/Index';
import NyArtikkel from './Fagartikler/NyArtikkel/index';
import Artikkel from './Fagartikler/Artikkel/Index';

import Kontakt from './Kontakt/Index';

import LoggInn from './LoggInn/Index'
import NoMatch from './NoMatch/Index';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/kontorer">
          <Kontorer />
        </Route>
        <Route path="/kontorer/:kontorerID">
          <Kontorer />
        </Route>
        <Route path="/kontor/:kontorID">
          <KontorSide />
        </Route>
        <Route exact path="/fagartikler">
          <FagArtikler />
        </Route>
        <Route exact path="/fagartikler/new">
          <NyArtikkel />
        </Route>
        <Route path="/fagartikkel/:artikkelID">
          <Artikkel />
        </Route>
        <Route exact path="/kontakt">
          <Kontakt />
        </Route>
        <Route exact path="/logginn">
          <LoggInn />
        </Route>
        <Redirect exact from="/" to="/home" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);
export default Routes;

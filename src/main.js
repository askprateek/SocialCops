import React from "react";
import ReactDOM from "react-dom";
import Layout from './lib/Layout'
import Content from './lib/pages/Content';
import MatchStatus from './lib/stats/MatchStatus';
import RunsPerYear from './lib/stats/RunsPerYear';
import PerformanceAgaintsTeams from './lib/stats/AgainstTeams';
import FinalVerdict from './lib/stats/FinalVerdict';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const app_root = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component = { Layout }>
        <IndexRoute component={Content}></IndexRoute>
        <Route path="match-status" component={ MatchStatus }></Route>
        <Route path="runs-per-year" component={ RunsPerYear }></Route>
        <Route path="performance-against" component= { PerformanceAgaintsTeams } ></Route>
        <Route path="final-verdict" component={ FinalVerdict }></Route>
      </Route>
    </Router>,
  app_root);

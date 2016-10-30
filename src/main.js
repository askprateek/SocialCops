import React from "react";
import ReactDOM from "react-dom";
import Layout from './lib/Layout'
import MatchStatus from './lib/stats/MatchStatus';
import RunsPerYear from './lib/stats/RunsPerYear';
import PerformanceAgaintsPak from './lib/stats/AgainstPakistan';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const app_root = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component = { Layout }>
        <Route path="match-status" component={ MatchStatus }></Route>
        <Route path="runs-per-year" component={ RunsPerYear }></Route>
        <Route path="test" component= { PerformanceAgaintsPak } ></Route>
      </Route>
    </Router>,
  app_root);

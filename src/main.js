import React from "react";
import ReactDOM from "react-dom";
import Layout from './lib/Layout'
import Barchart from './lib/charts/Barchart';
import Piechart from './lib/charts/Piechart';

import * as ReactD3 from 'react-d3-components';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const app_root = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component = {Layout}>
        <Route path="piechart" component={Barchart}></Route>
        <Route path="barchart" component={Piechart}></Route>
      </Route>
    </Router>,
  app_root);

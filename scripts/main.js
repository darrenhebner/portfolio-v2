import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Grapevine from './components/Grapevine';
import Wilfred from './components/Wilfred';
import Franglish from './components/Franglish';
import App from './components/App';

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/work" component={Work}/>
      <Route path="/work/grapevine" component={Grapevine}/>
      <Route path="/work/wilfred" component={Wilfred}/>
      <Route path="/work/franglish" component={Franglish}/>
      <Route path="/about" component={About}></Route>
      <Route path="*" component={Home}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));

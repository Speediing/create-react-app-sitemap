import  React from 'react';
import { Router, Route, Switch } from "react-router";
import { About, Dashboard, Home } from './components';

export default ( 
    <Router>
    <Switch>
      <Route path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/dashboard'  component={Dashboard}/>
    </Switch>
    </Router>);
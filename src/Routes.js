import {
    Switch,
    Route,
  } from "react-router-dom";

import  React from 'react';
import { About, Dashboard, Home } from "./components";

export default (<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Switch>)
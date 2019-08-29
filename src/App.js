import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './views/Home'
import { Smartlogs } from './views/Smartlogs'
import { Profile } from './views/Profile'
import { FourOFour } from './views/FourOFour'
import NavBar from './components/Nav/NavBar'
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />  
        <Route path="/smartlogs" exact component={Smartlogs} /> 
        <Route path="/" component={FourOFour} />
      </Switch>    
    </BrowserRouter>
  )
}

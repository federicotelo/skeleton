import React from 'react';
import { GlobalContext } from '../context/Context';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import Config from './Config';
import Consorcios from './Consorcios';
import Header from './Header';
import Inicio from './Inicio';


function App() {

   return (
      <GlobalContext.Provider value={{ nombre: "Fede" }}>
         <Router>
            <Header />
            <Switch>
               <Route exact path="/" component={Inicio} />
               <Route exact path="/config" component={Config} />
               <Route exact path="/consorcios" component={Consorcios} />
               <Redirect to="/" />
            </Switch>
         </Router>
      </GlobalContext.Provider>
   );
}

export default App;

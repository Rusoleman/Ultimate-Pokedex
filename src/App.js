import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import IndPokeCard from './components/IndPokeCard';
import Login from './components/Login';

import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  const[loginState, setLoginState] = useState(true)

  return (
   <>
        <Router>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/thisPokemon">POKEMON</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/thisPokemon" component={IndPokeCard}/>
          </Switch>
        </Router>
     
    </>
  );
}

export default App;

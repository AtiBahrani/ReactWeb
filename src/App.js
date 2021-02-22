import React , { useState, useEffect }from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './components/Util';


function App() {
 const [authLoading, setAuthLoading] = useState(true);
  
 useEffect(() => {
    const token = getToken();
    if (!token) {
      return ;
      
    }
     axios.get(`http://localhost:8080/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
      this.setState({response});
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <>
      <Router>
        <Navbar />
       
        <Switch>
          <Route activeClassName="active" exact path='/'  component={Home} />
          <PrivateRoute  path='/products' component={Products} />
          <PublicRoute activeClassName="active" path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

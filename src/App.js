import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FreeComponent from './FreeComponent';
import AuthComponent from './AuthComponent';
import ProtectedRoutes from './ProtectedRoutes';
import CustomNavbar from './CustomNavbar';
import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <>
      <CustomNavbar />
           {/* create routes here */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>

    </>
  );
}

export default App;

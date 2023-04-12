import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FreeComponent from './components/FreeComponent';
import AuthComponent from './components/AuthComponent';
import ProtectedRoutes from './components/ProtectedRoutes';
import CustomNavbar from './CustomNavbar';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <CustomNavbar />
           {/* create routes here */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

import { 
  HashRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div>
            <Switch>
              <Route exact path="/react-boilerplate">
                <Redirect to="/react-boilerplate/login" />
              </Route>

              <Route exact path="/">
                <Redirect to="/react-boilerplate/login" />
              </Route>

              <Route path='/react-boilerplate/home' component={Home}></Route>
              <Route path='/react-boilerplate/services' component={Services}></Route>
              <Route path='/react-boilerplate/about' component={About}></Route>
              <Route path='/react-boilerplate/contact' component={Contact}></Route>
              <Route path='/react-boilerplate/login' component={Login}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

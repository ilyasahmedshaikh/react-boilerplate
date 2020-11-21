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
  BrowserRouter as Router, 
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
              <Route exact path={process.env.PUBLIC_URL + '/react-boilerplate'}>
                <Redirect to={process.env.PUBLIC_URL + '/login'} />
              </Route>

              <Route exact path="/">
                <Redirect to={process.env.PUBLIC_URL + '/login'} />
              </Route>

              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/services'} component={Services}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/about'} component={About}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

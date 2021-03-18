import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact render={() => <Home></Home>} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch> 
      </Layout>
    </Router>
  );
}

export default App;
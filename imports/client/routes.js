import App from '../ui/containers/App';
import Home from '../ui/components/home';
import Contact from '../ui/components/contact';

import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class Routes extends Component {

  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>

          <IndexRoute component={ Home } />
          <Route path="home" component={ Home } />
          <Route path="contact" component={ Contact } />

        </Route>
      </Router>
    );
  }

}

export default Routes;

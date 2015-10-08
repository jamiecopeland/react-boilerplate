import React from 'react';
import Router, { Route } from 'react-router';

import Preloader from 'elements/preloader/Preloader';
import routes from './routes';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.runRouter();
  }

  runRouter() {
    Router.run(routes, this.onRouteChange.bind(this));
  }

  onRouteChange(handler) {
    this.setState({
      routeHandler: handler
    });
  }

  render() {
    return (
      <div>
        {this.state.routeHandler ? <this.state.routeHandler /> : null}
        <Preloader />
      </div>
    );
  }

}

React.render(<Main/>, document.getElementById('app-dom-hook'));

import React from 'react';
import Router, { Route } from 'react-router';

import AppPreloader from 'components/elements/appPreloader/AppPreloader';
import routes from './routes';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsReady: false
    };
  }

  componentDidMount() {
    this.setState({
      appIsReady: true
    });
  }

  runRouter() {
    Router.run(routes, this.onRouteChange.bind(this));
  }

  onRouteChange(handler) {
    this.setState({
      routeHandler: handler
    });
  }

  onPreloaderHideComplete() {
    this.runRouter();
  }

  render() {
    return (
      <div>
        {this.state.routeHandler ? <this.state.routeHandler /> : null}
        <AppPreloader
          isHidden={this.state.appIsReady}
          onHideComplete={this.onPreloaderHideComplete.bind(this)}
        />
      </div>
    );
  }

}

React.render(<Main/>, document.getElementById('app-dom-hook'));

import React from 'react';
import Router from 'react-router';

import AppPreloader from 'components/elements/appPreloader/AppPreloader';
import routes from './routes';

// NOTE: If the app needs to perform any asynchronous activity pre start up, appIsReady should be set to false in the constructor then flipped to true once the activity is complete.
// If no preloader is required, remove the preloader from index.html, the AppPreloader react component from the render() method below and call this.runRouter() in componentDidMount()
class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      appIsReady: true
    };
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

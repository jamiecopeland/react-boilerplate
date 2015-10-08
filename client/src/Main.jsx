import React from 'react';
import Router, { Route } from 'react-router';

import routes from './routes';

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app-dom-hook'));
});

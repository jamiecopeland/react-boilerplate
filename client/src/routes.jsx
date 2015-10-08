import React from 'react';
import { RouteHandler, Route } from 'react-router';

import Root from 'root/Root';
import ExampleScreen1 from 'screens/exampleScreen1/ExampleScreen1';
import ExampleScreen1A from 'screens/exampleScreen1/exampleScreen1A/ExampleScreen1A';
import ExampleScreen2 from 'screens/exampleScreen2/ExampleScreen2';

export default (
  <Route handler={RouteHandler}>
    <Route path="/" handler={Root}>
      <Route path="example-screen-1" handler={ExampleScreen1}>
        <Route path="example-screen-1a" handler={ExampleScreen1A}>
        </Route>
      </Route>
      <Route path="example-screen-2" handler={ExampleScreen2}>
      </Route>
    </Route>
  </Route>
);

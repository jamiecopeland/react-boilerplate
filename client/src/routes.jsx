import React from 'react';
import { RouteHandler, Route } from 'react-router';

import Root from 'components/root/Root';
import ExampleScreen1 from 'components/screens/exampleScreen1/ExampleScreen1';
import ExampleScreen1A from 'components/screens/exampleScreen1/exampleScreen1A/ExampleScreen1A';
import ExampleScreen2 from 'components/screens/exampleScreen2/ExampleScreen2';

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

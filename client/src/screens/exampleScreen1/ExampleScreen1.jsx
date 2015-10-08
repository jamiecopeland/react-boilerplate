import React from 'react';
import { RouteHandler } from 'react-router';

require('./ExampleScreen1.scss');

class ExampleScreen1 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ExampleScreen1">
        ExampleScreen1
        <RouteHandler/>
      </div>
    );
  }

}

export default ExampleScreen1;

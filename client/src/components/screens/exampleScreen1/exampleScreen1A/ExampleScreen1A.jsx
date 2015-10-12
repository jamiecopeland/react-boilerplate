import React from 'react';
import { RouteHandler } from 'react-router';

require('./ExampleScreen1A.scss');

class ExampleScreen1A extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ExampleScreen1A">ExampleScreen1A</div>
    );
  }

}

export default ExampleScreen1A;

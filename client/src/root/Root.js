import React from 'react';

import { RouteHandler } from 'react-router';

require('_styles/reset.scss');
require('_styles/typography.scss');
require('./Root.scss');

class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Root">
        <div>Root</div>
        <RouteHandler/>
      </div>
    );
  }

}

export default Root;

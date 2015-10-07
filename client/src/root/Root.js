import React from 'react';

require('_styles/reset.scss');
require('_styles/typography.scss');
require('./Root.scss');

class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Root">Root</div>
    );
  }

}

export default Root;

import React from 'react';

require('./Preloader.scss');

class Preloader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Preloader"></div>
    );
  }

}

export default Preloader;

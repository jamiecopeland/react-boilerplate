import React from 'react';

require('./AppPreloader.scss');

class Preloader extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps) {
    if(nextProps.isHidden) {
      this.hidePrePreloader(() => {
        this.props.onHideComplete();
      });
    }
  }

  hidePrePreloader(callback) {
    const prePreloaderElement = document.getElementsByClassName('Preloader')[0];
    if(prePreloaderElement) {
      prePreloaderElement.parentElement.removeChild(prePreloaderElement);
      callback();
    }
  }

  render() {
    return (
      <div className="AppPreloader"></div>
    );
  }

}

Preloader.propTypes = {
  isHidden: React.PropTypes.bool,
  onHideComplete: React.PropTypes.func
}

export default Preloader;

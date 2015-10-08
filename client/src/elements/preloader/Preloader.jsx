import React from 'react';

require('./Preloader.scss');

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
    const prePreloaderElement = document.getElementsByClassName('PrePreloader')[0];
    if(prePreloaderElement) {
      prePreloaderElement.parentElement.removeChild(prePreloaderElement);
      callback();
    }
  }

  render() {
    return (
      <div className="Preloader"></div>
    );
  }

}

Preloader.propTypes = {
  isHidden: React.PropTypes.bool,
  onHideComplete: React.PropTypes.func
}

export default Preloader;

import React from 'react';

require('./AppPreloader.scss');

class AppPreloader extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.checkIsHidden(this.props.isHidden);
  }

  componentWillUpdate(nextProps) {
    this.checkIsHidden(nextProps.isHidden);
  }

  checkIsHidden(isHidden) {
    if (isHidden) {
      this.hidePrePreloader(() => {
        this.props.onHideComplete();
      });
    }
  }

  hidePrePreloader(callback) {
    const prePreloaderElement = document.getElementsByClassName('Preloader')[0];
    if (prePreloaderElement) {
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

AppPreloader.propTypes = {
  isHidden: React.PropTypes.bool,
  onHideComplete: React.PropTypes.func
};

export default AppPreloader;

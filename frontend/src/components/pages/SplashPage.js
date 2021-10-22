import React, {PureComponent} from 'react';
import Navigation from '../navigation/Navigation';

class SplashPage extends PureComponent {
  render() {
    return (
      <div>
        <Navigation>
          SplashPage
        </Navigation>
      </div>
    );
  }
}

SplashPage.propTypes = {};

export default SplashPage;
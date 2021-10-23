import React, {PureComponent} from 'react';
import Navigation from '../navigation/SplashNavigation';

class SplashPage extends PureComponent {
  render() {
    return (
      <div>
        <Navigation>
            <div className="splash-page__container">

            </div>
        </Navigation>
      </div>
    );
  }
}

SplashPage.propTypes = {};

export default SplashPage;
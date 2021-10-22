import React, {PureComponent} from 'react';
import Navigation from '../navigation/Navigation';

class Balance extends PureComponent {
  render() {
    return (
      <div>
        <Navigation>
          Balance
        </Navigation>
      </div>
    );
  }
}

Balance.propTypes = {};

export default Balance;
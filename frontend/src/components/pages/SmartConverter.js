import React, {PureComponent} from 'react';
import Navigation from '../navigation/Navigation';
import LineChart from '../charts/LineChart';

class SmartConverter extends PureComponent {
  render() {
    return (
      <div>
        <Navigation>
          <div className="row">
            <div className="col-sm-8">
              <LineChart />
            </div>
          </div>
        </Navigation>
      </div>
    );
  }
}

SmartConverter.propTypes = {};

export default SmartConverter;
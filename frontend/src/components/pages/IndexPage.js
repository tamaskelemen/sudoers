import React, {PureComponent} from 'react';
import Navigation from '../navigation/Navigation';

class IndexPage extends PureComponent {
    render() {
        return (
            <div>
                <Navigation>
                    IndexPage
                </Navigation>
            </div>
        );
    }
}

IndexPage.propTypes = {};

export default IndexPage;

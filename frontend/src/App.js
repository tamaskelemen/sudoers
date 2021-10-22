import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import '@transferwise/components/build/main.css';

import './App.css';
import {Provider} from '@transferwise/components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SplashPage from './components/pages/SplashPage';
import SmartConverter from './components/pages/SmartConverter';
import Balance from './components/pages/Balance';

function App() {
  return (
    <Provider i18n={{ locale: 'en', messages: {} }}>
      <Router>
        <div>
          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/splashpage">splashpage</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/smartconverter">smartconverter</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/balance">balance</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/splashpage">
              <SplashPage/>
            </Route>
            <Route path="/smartconverter">
              <SmartConverter/>
            </Route>
            <Route path="/balance">
              <Balance/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

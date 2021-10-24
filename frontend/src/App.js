// import 'antd/dist/antd.css';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import '@transferwise/components/build/main.css';

import './App.css';
import './client/api.js';
import {Provider} from '@transferwise/components';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import SplashPage from './components/pages/SplashPage';
import SmartConverter from './components/pages/SmartConverter';
import Balance from './components/pages/Balance';
import IndexPage from './components/pages/IndexPage';

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
            <Route path="/splashpage/:source">
              <SplashPage/>
            </Route>
            <Route path="/smartconverter/:source">
              <SmartConverter/>
            </Route>
            <Route path="/user/account/balances/:balance_id">
              <Balance/>
            </Route>
            <Route path="/" >
              <Redirect to="/user/account/balances/87514" />
            </Route>
            {/*<Route path="/">*/}
            {/*  <IndexPage/>*/}
            {/*</Route>*/}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

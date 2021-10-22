import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import '@transferwise/components/build/main.css';

import './App.css';
import Navigation from './components/navigation/Navigation';
import {Provider} from '@transferwise/components';

function App() {
  return (
    <Provider i18n={{ locale: 'en', messages: {} }}>
      <Navigation>
        Hello World
      </Navigation>
    </Provider>
  );
}

export default App;

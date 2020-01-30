import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './services/history';
import GlobalStyles from './css/global';
import 'dotenv/config';
import './config/ReactotronConfig';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={2500} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

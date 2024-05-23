
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'regenerator-runtime'
import './index.css'

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/rootReducer';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import categorySaga from './store/sagas/GalerySata'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(categorySaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
<BrowserRouter> 
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js';
import { Provider } from 'react-redux';
import store from './store/Categories/index';

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <App />
    </Provider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

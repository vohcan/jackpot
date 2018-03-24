import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App jackpots="probar pase de props"/>, document.getElementById('root'));
registerServiceWorker();



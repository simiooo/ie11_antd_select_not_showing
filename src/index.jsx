import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'core-js/web/url.js'
import 'core-js/web/url-search-params.js'
import App from './app.jsx'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
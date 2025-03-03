import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/portfolio"> {/* Ensure this matches Vite’s base */}
    <App />
  </BrowserRouter>
);

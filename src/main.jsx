import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx'; // Importing App
import './index.css';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App /> {/* Render the App component */}
        </BrowserRouter>
    </React.StrictMode>,
);
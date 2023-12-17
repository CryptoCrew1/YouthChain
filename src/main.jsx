import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx'; // Importing App
import './index.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThirdwebProvider activeChain="goerli">
            <BrowserRouter>
                <StateContextProvider>
                    <App /> {/* Render the App component */}
                </StateContextProvider>
            </BrowserRouter>
        </ThirdwebProvider>
    </React.StrictMode>,
);

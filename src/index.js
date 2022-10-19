import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { BrowserRouter } from "react-router-dom";

const clientApp = new PublicClientApplication({
  auth: {
    clientId: 'fdbdbee7-9cba-4b37-a014-0cf4a918b6c9',
    authority: 'https://login.microsoftonline.com/81734875-8428-489b-8cf2-c8edfa731fb5',
    redirectUri: '/',
    postLogoutRedirectUri: '/logout',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: () => { }
    }
  }
});

clientApp.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS) {
    clientApp.setActiveAccount(event.payload.account);
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App msalInstance={clientApp} />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

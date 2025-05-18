
import 'bootstrap/dist/css/bootstrap.min.css';import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloak from './keycloak';

keycloak.init({ onLoad: 'login-required' }).then((authenticated: boolean) => {
  if (authenticated) {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
    } else {
      console.error("Root element not found");
    }
  } else {
    console.warn("Not authenticated, reloading...");
    window.location.reload();
  }
});
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CapsuleProvider } from './context/CapsuleContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CapsuleProvider>
        <App />
      </CapsuleProvider>
    </AuthProvider>
  </React.StrictMode>
);

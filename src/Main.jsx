import { render } from 'preact'
import React from 'react'
import ReactDom from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));
   root.render(
    <React.StrictMode>
        <Router>
        
        </Router>
    </React.StrictMode>
)


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './components/App';


const root = document.getElementById('root')

// ReactDOM.render(
//   <Badge
//     firstName='Carlos' 
//     lastName='Aguilar'
//     jobTitle='Frontend Engineer'
//     twitter='sparragus'
//   />, 
//   root)

ReactDOM.render(<App />, root)
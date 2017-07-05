import React from 'react';
import ReactDom from 'react-dom';

// import App from './App.jsx';
import ProductBox from './components/ProductBox.jsx';

const root = document.createElement('div');

document.body.appendChild(root);

ReactDom.render(<ProductBox />, root);
// ReactDom.render(<ProductBox />, document.getElementById('root'));

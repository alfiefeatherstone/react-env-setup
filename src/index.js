import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import './styles/index.css';

const container = document.getElementById('container');

ReactDom.render(<App></App>, container);
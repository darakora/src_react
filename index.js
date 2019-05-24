import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloItem from './HelloItem';
import HelloItemList from './HelloItemList'
import HelloWorld from './HelloWorld';
import HelloWorldClass from './HelloWorldClass';
import LoginForm from './LoginForm';
import Togl from './Togl'

ReactDOM.render(<Togl />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDom from 'react-dom';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';



const divRoot = document.querySelector('#root');


// ReactDom.render( <FirstApp saludo1="Hola soy  Ivan"/>, divRoot);
ReactDom.render( <CounterApp value={123}/>, divRoot);
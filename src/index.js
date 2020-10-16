import React from 'react';
import ReactDom from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import './index.css';



const divRoot = document.querySelector('#root');


// ReactDom.render( <FirstApp saludo1="Hola, soy Iván"/>, divRoot);
ReactDom.render( <CounterApp /* value={20} *//>, divRoot);
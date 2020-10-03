// Functional component

import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const saludo = 'Hola mundo';
const objeto = {
    nombre: 'Pepe',
    edad: 34
}


const FirstApp = ( {saludo1 /* = 'Hola gente' */} ) => {

    
  return (
    <>
      <h1>{saludo}</h1>
      <h2>{ saludo1 }</h2>
      <p> {JSON.stringify(objeto)}</p>
      <pre> {JSON.stringify(objeto, null, 3)}</pre>
      <p> First App</p>
    </>
  );
};

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
export default FirstApp;

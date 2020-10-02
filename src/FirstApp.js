// Functional component

import React, { Fragment } from "react";

const saludo = 'Hola mundo';
const objeto = {
    nombre: 'Pepe',
    edad: 34
}


const FirstApp = () => {
  return (
    <>
      <h1>{saludo}</h1>
      <p> {JSON.stringify(objeto)}</p>
      <pre> {JSON.stringify(objeto, null, 3)}</pre>
      <p> First App</p>
    </>
  );
};

export default FirstApp;

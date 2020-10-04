import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [ counter, setCounter ] = useState( value );

  
  
  const handleAdd = () => {
    setCounter( counter + 1);
    // si no tenemos acceso a la primera var(counter) podemos operar así con el set
    // setCounter( () => c + 1)
  };

  const handleMinus = () => {
      setCounter( counter - 1);
  };

  const handleReset = () => {
      setCounter( value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      {/* aqui no ejecutamos la función como tal, en ese caso se ejecutaría de forma secuencial,
      ponemos la referencia para que se ejecute con el evento, si ejecutamos la función éstga ha de tener un return
      que devuelva otra función */}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>-1</button>


    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;

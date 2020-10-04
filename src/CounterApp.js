import React from "react";
import PropTypes from 'prop-types';


const CounterApp = ({value}) => {
  const handleAdd = (e) => {
    console.log(e)
  }
  
  
  
    return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>

      <button onClick={ handleAdd }>+1</button>{/* aqui no ejecutamos la función como tal, en ese caso se ejecutaría de forma secuencial,
      ponemos la referencia para que se ejecute con el evento, si ejecutamos la función éstga ha de tener un return
      que devuelva otra función */}
    </>
  );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
} 

export default CounterApp;

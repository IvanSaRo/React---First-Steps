// Functional component

import React from "react";
import PropTypes from 'prop-types';




const FirstApp = ( {saludo, subtitle}  /* = 'Soy un subtitulo' */ ) => {

    
  return (
    <>
      
      <h2> {saludo} </h2>
     
      <p> {subtitle}</p>
    </>
  );
};

 FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
} 

FirstApp.defaultProps = {
    subtitle: 'Soy un subtitulo'
}
export default FirstApp;


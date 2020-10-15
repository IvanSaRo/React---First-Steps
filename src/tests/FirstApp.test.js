import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";

describe("Pruebas en FirstApp", () => {
  test("Debe mostrar FirstApp correctamente", () => {
    const saludo = "Hola, soy Iván";
    const wrapper = shallow(<FirstApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot(); /*  */
  });

  test('Debe mostrar el subtitulo enviado por props', () => {
    const saludo = "Hola, soy Iván";
    const subTitle = "Soy un subtitulo";
    
    const wrapper = shallow(
        <FirstApp 
            saludo={saludo} 
            subtitle= {subTitle}
        />
    );
    
    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subTitle);
  })
  
});

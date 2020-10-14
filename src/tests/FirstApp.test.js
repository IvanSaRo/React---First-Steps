import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";






describe('Pruebas en FirstApp', () => {


    test('Debe mostrar FirstApp correctamente', () => {
        
        const saludo = "Hola, soy Iván";
        
        const wrapper = shallow(<FirstApp saludo={saludo} />)

        expect( wrapper ).toMatchSnapshot();/*  */
    })
    
})
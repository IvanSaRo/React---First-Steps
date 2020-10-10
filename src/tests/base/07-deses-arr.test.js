import { retornaArreglo } from '../../base/07-deses-arr';

import "@testing-library/jest-dom";


describe('Tests en 07 deses arrays', () => {
    
    test('debe devolver un array y un número', () => {
        
        // const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();

        // expect( arr ).toEqual( ['ABC', 123] );
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );
    })
    
})

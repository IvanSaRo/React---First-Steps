import { getHeroeByIdAsync } from "../../base/09-promesas";

import heroes from "../../data/heroes";

import "@testing-library/jest-dom";


describe("Pruebas con promesas", () => {
  test("getHeroeByIdSync debe devolver un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done(); //este done junto con el de línea 8
    });
  });

  test('debe devolver el error si mandamos un id que no existe', (done) => {
      
    const id = 234;

    getHeroeByIdAsync(id).catch(err => {
        expect(err).toBe("No se pudo encontrar el héroe");
        done();
    })

  })
  
});

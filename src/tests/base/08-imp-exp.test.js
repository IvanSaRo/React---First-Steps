import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

import "@testing-library/jest-dom";

describe("Pruebas con funciones de héroes", () => {
  test("debe devolver un héroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe devolver undefined si el heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe devolver un array con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("debe devolver un array con héroes de Marver y una longitud determinada", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
    expect(heroesData.length).toBe(2);
  });
});

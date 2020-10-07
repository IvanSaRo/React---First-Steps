import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02 template string", () => {
  test("getSaludo debe retornar hola + nombre ", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("debe retornar hola - valor por defecto", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola " + "Carlos");
  });
});

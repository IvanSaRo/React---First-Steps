describe("Pruebas en demo.test.js", () => {
  test("los strings han de ser iguales", () => {
    //    1. Inicializamos

    const mensaje = "Hola Mundo";

    //    2. Estímulo

    const mensaje2 = `Hola Mundo`;

    //    3. Observar el comportamiento

    expect(mensaje).toBe(mensaje2);
  });
});

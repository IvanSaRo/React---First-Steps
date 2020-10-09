import { getUser, getUsuarioActivo } from "../../base/05-funciones";

import "@testing-library/jest-dom";

describe("Prueba en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo ha de retornar un objeto", () => {
    const name = 'José';
    
    const userTest = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo( name );

    expect( user ).toEqual({
        uid: 'ABC567',
        username: name
    })
  });
});

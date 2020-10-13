import { getImagen } from "../../base/11-async-await";

import "@testing-library/jest-dom";

describe("Pruebas con async-await y fetch", () => {
  test("Getimagen debe devolver la url de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});

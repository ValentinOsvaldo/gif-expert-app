import getGifs from "../../Helpers/getGifs";

describe("Pruebas con getGifs", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Halo");

    expect(gifs.length).toBe(10);
  });

  test("Nombre vacio", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});

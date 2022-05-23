export const idValidators = async (id = "") => {
  if (id.slice(0, 3) !== "MLA") {
    throw new Error("El producto no pertenece a Mercado Libre");
  }
};

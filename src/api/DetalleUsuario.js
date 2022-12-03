import Base from "./base";

const endpoint = "/detalle-usuarios";

const post = async (request) => {
  return await Base.post(endpoint, request);
};

const Detalle = { post };

export default Detalle;

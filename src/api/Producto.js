import Base from "./base";

const endpoint = "/producto";

const getAll = async () => {
  return await Base.get(endpoint);
};

const getOne = async (id) => {
  const newEndpoint = endpoint.concat("/", id);

  return await Base.get(newEndpoint);
};

const Producto = { getAll, getOne };

export default Producto;

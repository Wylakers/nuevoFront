import Base from "./base";

const endpoint = "/pre-armado";

const getAll = async () => {
  return await Base.get(endpoint);
};

const getOne = async (id) => {
  const newEndpoint = endpoint.concat("/", id);

  return await Base.get(newEndpoint);
};

const PreArmado = { getAll, getOne };

export default PreArmado;

import Base from "./base";

const endpoint = "/usuario";

const post = async (request) => {
  return await Base.post(endpoint, request);
};

const login = async (request) => {
  const newEndpoint = "/usuario/login";

  return await Base.post(newEndpoint, request);
};

const update = async (id, request) => {
  const newEndpoint = endpoint.concat("/", id);

  return await Base.put(newEndpoint, request);
};

const Usuario = { post, login, update };

export default Usuario;

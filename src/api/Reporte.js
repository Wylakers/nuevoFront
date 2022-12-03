import Base from "./base";

const endpoint = "/reporte";

const post = async (request) => {
  return await Base.post(endpoint, request);
};

const Reporte = { post };

export default Reporte;

import { connect } from "mongoose";

const options = {
  user: "resumai_v1_admin", // Usuário do banco de dados.
  pass: "resumai", // senha do usuário do banco de dados.
  dbName: "resumai-v1-mongodb", // Define qual banco de dados você irá utilizar.
};

const connectionMongoDb = async () => {
  try {
    await connect("mongodb://localhost:27017/", options);
  } catch (error) {
    console.error(`Não foi possível conectar ao Mongo: ${error}`);
  }
};

export default connectionMongoDb;

const { Sequelize } = require("sequelize");
const CharacterModel = require("./models/Character");
const EpisodeModel = require("./models/Episode");
const UserModel = require("./models/User");
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = process.env;

//Primero genero la conexion. Cuando esto sucede, la base de datos no tiene modelos. Sequelize.models = {}
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false } // Es para que no diga giladas el log cuando se levante la db
);

//Estas ejecuciones de funciones definen el modelo correspondiente en la base de datos.
CharacterModel(sequelize);
EpisodeModel(sequelize);
UserModel(sequelize);

//Aca importamos los modelos desde sequelize.models = {Character: Character, Episode: Episode} para poder hacer las relaciones.
const { Character, Episode } = sequelize.models;

//Aca relacionamos las tablas. Siempre de a 2.
Character.belongsToMany(Episode, { through: "Characters_Episodes" });
Episode.belongsToMany(Character, { through: "Characters_Episodes" });

//Exportamos la instancia de sequelize y los modelos. { Sequelize, Character, Episode, User }
module.exports = {
  sequelize,
  ...sequelize.models,
};

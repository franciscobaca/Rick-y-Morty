const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Episode",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

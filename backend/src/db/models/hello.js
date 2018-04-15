

module.exports = function defineHello(sequelize, DataTypes) {
  const { TEXT, DATE } = DataTypes;
  return sequelize.define('hello', {
    text: {
      type: TEXT,
    },
    created_at: {
      type: DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    underscored: true,
  });
};

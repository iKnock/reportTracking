/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Lookup', {
		lookupId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'lookup_id'
		},
		lookupFor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'lookup_for'
		},
		lookupName: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'lookup_name'
		},
		description: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'lookup'
	});
};

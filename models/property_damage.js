/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PropertyDamage', {
		propertyId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'property_id'
		},
		reportId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'report_id'
		},
		propertyName: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'property_name'
		},
		levelOfDamage: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'level_of_damage'
		},
		costEstimation: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'cost_estimation'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		remark: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'property_damage'
	});
};

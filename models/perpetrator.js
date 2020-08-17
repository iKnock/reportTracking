/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Perpetrator', {
		perpetratorId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'perpetrator_id'
		},
		reportId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'report_id'
		},
		perpetratorName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'perpetrator_name'
		},
		isGovComplicit: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'is_gov_complicit'
		},
		isOrganizedGroup: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'is_organized_group'
		},
		perpDesc: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'perp_desc'
		},
		remark: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'perpetrator'
	});
};

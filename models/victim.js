/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Victim', {
		victimId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'victim_id'
		},
		reportId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'report_id'
		},
		victimName: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'victim_name'
		},
		victimAge: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'victim_age'
		},
		victimWorkStatus: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'victim_work_status'
		},
		victimFamilyStatus: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'victim_family_status'
		},
		victimCategory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'victim_category'
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
		tableName: 'victim'
	});
};

/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Evidence', {
		evidenceId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'evidence_id'
		},
		userReportId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'user_report_id'
		},
		evidenceTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'evidence_type_id'
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
		tableName: 'evidence'
	});
};

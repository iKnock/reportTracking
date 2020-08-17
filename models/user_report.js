/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UserReport', {
		userReportId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'user_report_id'
		},
		reportId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'report_id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'user_id'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'user_report'
	});
};

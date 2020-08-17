/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Report', {
		reportId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'report_id'
		},
		reportTitle: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'report_title'
		},
		reportDesc: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'report_desc'
		},
		happenOnDate: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'happen_on_date'
		},
		reportedOnDate: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'reported_on_date'
		},
		reportCategory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'report_category'
		},
		remark: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'report'
	});
};

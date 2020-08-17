/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Media', {
		mediaId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'media_id'
		},
		evidenceId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'evidence_id'
		},
		mediaUrl: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'media_url'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: false
		}
	}, {
		sequelize,
		tableName: 'media'
	});
};

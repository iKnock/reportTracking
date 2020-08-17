/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Address', {
		addressId: {
			autoIncrement: true,
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'address_id'
		},
		region: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		zone: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		woreda: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		kebele: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		localName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'local_name'
		},
		locLat: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'loc_lat'
		},
		locLong: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'loc_long'
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
		tableName: 'address'
	});
};

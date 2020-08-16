DROP TABLE IF EXISTS `db_reporting_app`.`tbl_address`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `zone` varchar(30) NOT NULL,
  `woreda` varchar(30) NOT NULL,
  `kebele` varchar(30) NOT NULL,
  `local_name` varchar(50) NOT NULL,
  `loc_lat` varchar(50) NOT NULL,
  `loc_long` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `remark` varchar(50) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_casualities`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_casualities` (
  `casuality_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `casu_name` varchar(30) NOT NULL,
  `casu_age` int(11) NOT NULL,
  `casu_work_status` varchar(30) NOT NULL,
  `casu_family_status` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `remark` varchar(100) NOT NULL,
  PRIMARY KEY (`casuality_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
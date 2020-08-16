DROP TABLE IF EXISTS `db_reporting_app`.`tbl_perpetrator`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_perpetrator` (
  `perpetrator_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `perpetrator_name` varchar(50) NOT NULL,
  `is_gov_complicit` tinyint(1) NOT NULL,
  `is_organized_group` tinyint(1) NOT NULL,
  `perp_desc` varchar(100) NOT NULL,
  `remark` varchar(100) NOT NULL,
  PRIMARY KEY (`perpetrator_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
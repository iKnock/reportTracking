DROP TABLE IF EXISTS `db_reporting_app`.`tbl_report`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_title` varchar(50) NOT NULL,
  `report_desc` varchar(100) NOT NULL,
  `happen_on_date` varchar(30) NOT NULL,
  `reported_on_date` varchar(30) NOT NULL,
  `report_category` int(11) NOT NULL,
  `remark` varchar(100) NOT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

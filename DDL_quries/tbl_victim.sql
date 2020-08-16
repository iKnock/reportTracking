DROP TABLE IF EXISTS `db_reporting_app`.`tbl_victim`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_casualities` (
  `victim_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `victim_name` varchar(30) NOT NULL,
  `victim_age` int(11) NOT NULL,
  `victim_work_status` varchar(30) NOT NULL,
  `victim_family_status` varchar(30) NOT NULL,
  `victim_category` int(11) NOT NULL,--put the look up id here
  `description` varchar(200) NOT NULL,
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`victim_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
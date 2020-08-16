DROP TABLE IF EXISTS `db_reporting_app`.`tbl_report`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_title` varchar(50) NOT NULL,
  `report_desc` varchar(200) NOT NULL,
  `happen_on_date` varchar(30) NOT NULL,
  `reported_on_date` varchar(30) NOT NULL,
  `report_category` int(11) NOT NULL,--put the look up id here
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`report_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

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
  `description` varchar(200) NOT NULL,
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

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
  PRIMARY KEY (`casuality_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_evidence`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_evidence` (
  `evidence_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_report_id` int(11) NOT NULL,
  `evidence_type_id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`evidence_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_lookup`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_lookup` (
  `lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `lookup_for` int(11) NOT NULL,
  `lookup_name` varchar(30) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`lookup_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_media`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_media` (
  `media_id` int(11) NOT NULL AUTO_INCREMENT,
  `evidence_id` int(11) NOT NULL,
  `media_url` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_perpetrator`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_perpetrator` (
  `perpetrator_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `perpetrator_name` varchar(50) NOT NULL,
  `is_gov_complicit` tinyint(1) NOT NULL,
  `is_organized_group` tinyint(1) NOT NULL,
  `perp_desc` varchar(200) NOT NULL,
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`perpetrator_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_property_damage`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_property_damage` (
  `property_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `property_name` varchar(30) NOT NULL,
  `level_of_damage` varchar(100) NOT NULL,
  `cost_estimation` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `remark` varchar(200) NOT NULL,
  PRIMARY KEY (`property_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_user_report`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_user_report` (
  `user_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`user_report_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
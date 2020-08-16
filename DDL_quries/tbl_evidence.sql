DROP TABLE IF EXISTS `db_reporting_app`.`tbl_evidence`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_evidence` (
  `evidence_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_report_id` int(11) NOT NULL,
  `evidence_type_id` int(11) NOT NULL,
  `description` varchar(30) NOT NULL,
  `remark` varchar(30) NOT NULL,
  PRIMARY KEY (`evidence_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
DROP TABLE IF EXISTS `tbl_user_report`;
CREATE TABLE IF NOT EXISTS `tbl_user_report` (
  `user_report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`user_report_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

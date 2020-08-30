DROP TABLE IF EXISTS `db_reporting_app`.`tbl_media`;
CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_media` (
  `media_id` int(11) NOT NULL AUTO_INCREMENT,
  `evidence_id` int(11) NOT NULL,
  `media_url` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
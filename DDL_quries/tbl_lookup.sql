DROP TABLE IF EXISTS `tbl_lookup`;
CREATE TABLE IF NOT EXISTS `tbl_lookup` (
  `lookup_id` int(11) NOT NULL AUTO_INCREMENT,
  `lookup_for` int(11) NOT NULL,
  `lookup_name` varchar(30) NOT NULL,
  `description` int(11) NOT NULL,
  PRIMARY KEY (`lookup_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
DROP TABLE IF EXISTS `tbl_property_damage`;
CREATE TABLE IF NOT EXISTS `tbl_property_damage` (
  `property_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  `property_name` varchar(30) NOT NULL,
  `level_of_damage` varchar(100) NOT NULL,
  `cost_estimation` varchar(30) NOT NULL,
  `description` varchar(100) NOT NULL,
  `remark` varchar(100) NOT NULL,
  PRIMARY KEY (`property_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

DROP TABLE IF EXISTS `db_reporting_app`.`tbl_lookup`;
  CREATE TABLE IF NOT EXISTS `db_reporting_app`.`tbl_lookup` (
    `lookup_id` int(11) NOT NULL AUTO_INCREMENT,
    `lookup_for` int(11) NOT NULL,
    `lookup_name` varchar(30) NOT NULL,
    `description` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`lookup_id`)
  ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
  COMMIT;
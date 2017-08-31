CREATE TABLE `office_hours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `person_id` int(11) NULL,
  `location_id` int(11) NOT NULL,
  `day_indicator` VARCHAR(7) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `expires_on` datetime NULL,
  `phone` VARCHAR(32) NULL,
  `title` VARCHAR(64) NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

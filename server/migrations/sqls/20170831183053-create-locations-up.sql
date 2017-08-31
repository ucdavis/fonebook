CREATE TABLE `locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building` VARCHAR(64) NOT NULL,
  `room` VARCHAR(12) NOT NULL,
  `label` VARCHAR(128) NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

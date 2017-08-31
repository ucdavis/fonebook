CREATE TABLE `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginid` varchar(8) NOT NULL,
  `first` varchar(64) NOT NULL,
  `last` varchar(64) NOT NULL,
  `displayName` varchar(129) NULL, /* first + space + last */
  `lastAccessed` datetime DEFAULT NULL,
  `email` varchar(128) NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

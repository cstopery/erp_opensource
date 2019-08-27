CREATE TABLE IF NOT EXISTS `bonanza_order` (
  `orderID` varchar(255) NOT NULL,
  `amountPaid` float(10,2) NOT NULL DEFAULT '0.00',
  `amountSaved` int(55) DEFAULT '0',
  `buyerCheckoutMessage` varchar(255) DEFAULT NULL,
  `buyerUserID` varchar(255) DEFAULT NULL,
  `buyerUserName` varchar(255) DEFAULT NULL,
  `checkoutStatus` varchar(100) DEFAULT NULL,
  `createdTime` datetime DEFAULT NULL,
  `creatingUserRole` varchar(100) DEFAULT NULL,
  `orderStatus` varchar(100) DEFAULT NULL,
  `subtotal` float(10,2) DEFAULT '0.00',
  `taxAmount` float(10,2) DEFAULT '0.00',
  `total` float(10,2) DEFAULT '0.00',
  `email` varchar(255) DEFAULT NULL COMMENT 'transaction(buyer)',
  `providerName` varchar(100) DEFAULT NULL,
  `providerID` varchar(255) DEFAULT NULL COMMENT 'transaction',
  `finalValueFee` float(10,2) DEFAULT '0.00' COMMENT 'transaction',
  `paidTime` datetime DEFAULT NULL,
  `addressID` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `cityName` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `country` varchar(55) DEFAULT NULL COMMENT 'shippingAddress',
  `countryName` varchar(100) DEFAULT NULL COMMENT 'shippingAddress',
  `name` varchar(100) DEFAULT NULL COMMENT 'shippingAddress',
  `postalCode` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `stateOrProvince` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `street1` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `street2` varchar(255) DEFAULT NULL COMMENT 'shippingAddress',
  `insuranceFee` float(10,2) DEFAULT '0.00' COMMENT 'shippingDetails',
  `amount` int(55) DEFAULT '0' COMMENT 'shippingDetails',
  `servicesArray` varchar(255) DEFAULT NULL COMMENT 'shippingDetails',
  `shippingService` varchar(255) DEFAULT NULL COMMENT 'shippingDetails',
  `notes` varchar(255) DEFAULT NULL COMMENT 'shippingDetails',
  `addinfo` text,
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `bonanza_order_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemID` varchar(255) NOT NULL,
  `sellerInventoryID` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float(10,2) NOT NULL DEFAULT '0.00',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `ebayId` varchar(255) DEFAULT NULL,
  `orderID` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;
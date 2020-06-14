'use strict';
const events = require('./lib/events.js');

const pickup = require('./lib/caps.js').pickupOrder ;
const inTransit = require('./lib/caps.js').inTransitOrder ;
const delivered = require('./lib/caps.js').deliveredOrder ;

events.on('pickup',pickup);

require('./lib/driver.js');
require('./lib/vendor.js');

events.on('in-transit', inTransit);
events.on('delivered', delivered);
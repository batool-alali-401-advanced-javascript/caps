'use strict';
require('dotenv').config();
const events = require('./events.js');
const faker = require('faker');
const STORE_NAME= process.env.STORE_NAME || 'bato';
const handler = require('./caps.js').vendorDelivered;



setInterval(() => {
  const order = {
    time: new Date(),
    store: STORE_NAME,
    orderId: faker.random.number(),
    customer: faker.name.findName(),
    address: ` ${faker.address.city()}, ${faker.address.streetAddress()}`,
  };

  events.emit('pickup', order);
}, 5000);

events.on('delivered', handler);

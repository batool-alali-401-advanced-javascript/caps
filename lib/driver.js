'use strict';

const events = require('./events.js');
const pickup = require('./caps.js').driverPickup;
const delivery = require('./caps.js').driverDelivered;

function goOutForDelivery(payload) {
  events.emit('in-transit',  `${payload.orderId}`);
  setTimeout(()=>{
    events.emit('delivered', payload);
  },1000);
}

events.on('pickup', pickup);
events.on('pickup', goOutForDelivery);
events.on('delivered', delivery);
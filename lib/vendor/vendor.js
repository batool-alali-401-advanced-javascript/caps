'use strict';

require('dotenv').config();
const net = require('net');
const socket = net.Socket();
// const events = require('../events.js');
const faker = require('faker');
const STORE_NAME= process.env.STORE_NAME || 'bato';
// const handler = require('../caps/caps.js').vendorDelivered;
const PORT=process.env.PORT||3000;
const HOST=process.env.HOST||'localhost';

socket.connect(PORT, HOST, () => {
  console.log('Vendor Connected');
  socket.on('data', (payload) => {
    let event = JSON.parse(payload);
  
    if(event.event === 'delivered')
    console.log('Thank you for delivering ',event.customerOrder.orderId);
  
  });
  
  setInterval(() => {
    const order = {
      time: new Date(),
      store: STORE_NAME,
      orderId: faker.random.number(),
      customer: faker.name.findName(),
      address: ` ${faker.address.city()}, ${faker.address.streetAddress()}`,
    };
  
    socket.write(JSON.stringify({event: 'pickup', customerOrder: order}));
  }, 5000);
  
  
  
  
  
  
  socket.on('error', (err) => console.log(` vendor error ${err.message}`));
});

socket.on('data', (payload) => {
  let event = JSON.parse(payload);

  if(event.event === 'delivered')
  console.log('Thank you for delivering ',event.customerOrder.orderId);

});

setInterval(() => {
  const order = {
    time: new Date(),
    store: STORE_NAME,
    orderId: faker.random.number(),
    customer: faker.name.findName(),
    address: ` ${faker.address.city()}, ${faker.address.streetAddress()}`,
  };

  socket.write(JSON.stringify({event: 'pickup', customerOrder: order}));
}, 5000);






socket.on('error', (err) => console.log(` vendor error ${err.message}`));

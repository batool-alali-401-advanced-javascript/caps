'use strict';

// const events = require('../events.js');
// const pickup = require('../caps/caps.js').driverPickup;
// const delivery = require('../caps/caps.js').driverDelivered;
const net = require('net');
const socket = net.Socket();

const PORT=process.env.PORT||3000;
const HOST=process.env.HOST||'localhost';

socket.connect(PORT, HOST, () => {
  console.log('Driver Connected');
  socket.on('data', (payload) => {
    let event = JSON.parse(payload);
  
    if (event.event === 'pickup'){
      setTimeout(()=> {
  
        let newEvent = {event: 'in-transit',customerOrder: event.customerOrder};
        console.log('picked', event.customerOrder.orderId);
        socket.write(JSON.stringify(newEvent));
      },1000);
    }
  
    if (event.event === 'in-transit'){
      setTimeout(()=> {
        let newEvent = {event: 'delivered',customerOrder: event.customerOrder};
        console.log('delivered ', event.customerOrder.orderId);
        socket.write(JSON.stringify(newEvent));
      },3000);
  
    }
    
  });
  
  socket.on('error', (err) => console.log(`Driver error ${err.message}`));
  
});



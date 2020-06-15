'use strict';
const handler = require('../lib/caps/caps.js');

let consoleSpy = jest.spyOn(console, 'log');

describe('logger', () => {
  it('can log pickup ', () => {

    let obj = {
      event:'pickup',
      customerOrder:{
        time: '14 June',
        store:'bato',
        orderId: 12345,
        customer: 'batool',
        address: 'Amman',
      },
    };
    let event = JSON.stringify(obj);
    handler(event);
    expect(consoleSpy).toBeCalledTimes(2);
  });

  it('can log in-transit', () => {
  
    let obj = {
      event:'in-transit',
      customerOrder:{
        time: '14 June',
        store:'bato',
        orderId: 12345,
        customer: 'batool',
        address: 'Amman',
      },
    };
    let event = JSON.stringify(obj);
    handler(event);
    expect(consoleSpy).toHaveBeenCalledWith('in-transit order', obj.customerOrder.orderId  );
  });

  it('can log delivered', () => {
  
    let obj = {
      event:'delivered',
      customerOrder:{
        time: '14 June',
        store:'bato',
        orderId: 12345,
        customer: 'batool',
        address: 'Amman',
      },
    };
    let event = JSON.stringify(obj);
    handler(event);
    expect(consoleSpy).toHaveBeenCalledWith('delivered order', obj.customerOrder.orderId);
  });
  // it('can log in delivered order ', () => {
  //   let payload = {
  //     time: '14 June',
  //     store:'bato',
  //     orderId: 12345,
  //     customer: 'batool',
  //     address: 'Amman',
  //   };
  

  //   handler.deliveredOrder(payload);
  //   expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.orderId}`);
  // });

  // it('can log pickup order ', () => {
  //   let payload = {
  //     time: '14 June',
  //     store:'bato',
  //     orderId: 12345,
  //     customer: 'batool',
  //     address: 'Amman',
  //   };
  

  //   handler.pickupOrder(payload);
  //   expect(consoleSpy).toHaveBeenCalledWith('EVENT pickup');
  //   expect(consoleSpy).toHaveBeenCalledWith('Time:', payload.time);
  //   expect(consoleSpy).toHaveBeenCalledWith('Store:', payload.store);
  //   expect(consoleSpy).toHaveBeenCalledWith('OrderID:', payload.orderId);
  //   expect(consoleSpy).toHaveBeenCalledWith('Customer:', payload.customer);
  //   expect(consoleSpy).toHaveBeenCalledWith('Address:', payload.address);

  // });

});
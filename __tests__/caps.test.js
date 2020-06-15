'use strict';
const handler = require('../lib/caps/caps.js');

let consoleSpy = jest.spyOn(console, 'log');

describe('Handler', () => {
  it('can log pickup ', () => {

    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };

    handler.driverPickup(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`Driver is picking up order ${payload.orderId}`);
  });

  it('can log in-transit', () => {
  
    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };
  
    handler.driverDelivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.orderId}`);
    }, 3000);
  });

  it('can log vendor ', () => {
    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };
  
    handler.vendorDelivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`Vendor: thank you for delivering order ${payload.orderId}`);
    }, 5000);
  });

  it('can log in transit order ', () => {
    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };
  
  
    handler.inTransitOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT in-transit ${payload.orderId}`);
  });

  it('can log in delivered order ', () => {
    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };
  

    handler.deliveredOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`Delivered order ${payload.orderId}`);
  });

  it('can log pickup order ', () => {
    let payload = {
      time: '14 June',
      store:'bato',
      orderId: 12345,
      customer: 'batool',
      address: 'Amman',
    };
  

    handler.pickupOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith('EVENT pickup');
    expect(consoleSpy).toHaveBeenCalledWith('Time:', payload.time);
    expect(consoleSpy).toHaveBeenCalledWith('Store:', payload.store);
    expect(consoleSpy).toHaveBeenCalledWith('OrderID:', payload.orderId);
    expect(consoleSpy).toHaveBeenCalledWith('Customer:', payload.customer);
    expect(consoleSpy).toHaveBeenCalledWith('Address:', payload.address);

  });

});
'use strict';

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*'
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '3'
    },
    rinkeby: {
      host: 'localhost',
      port: 18545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '4'
    },
    kovan: {
      host: 'localhost',
      port: 28545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '42'
    }
  }
};
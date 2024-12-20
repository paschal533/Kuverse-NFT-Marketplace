const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privatekey = '';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://rpc.chiadochain.net`,
      accounts: [privatekey] // add the account that will deploy the contract (private key)
    },
  },
  solidity: '0.8.4',
};

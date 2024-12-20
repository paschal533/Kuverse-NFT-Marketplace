const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privatekey = ''; // fs.readFileSync('.secret').toString().trim();

const projectID = '591a46e0426f4722b635a7653c02cbbd';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectID}`, //Infura url with projectId
      accounts: [privatekey] // add the account that will deploy the contract (private key)
    },
  },
  solidity: '0.8.4',
};

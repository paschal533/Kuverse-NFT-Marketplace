// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomiclabs/hardhat-waffle');

const privatekey = ''; // fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: 'https://sepolia.base.org',
      accounts: [privatekey],
    },
    solidity: '0.8.4',
  },
};


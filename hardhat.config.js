require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY, POLYGON_TESTNET_URL, POLYGONSCAN_API_KEY } = process.env;

// console.log('POLYGONSCAN_API_KEY = ', POLYGONSCAN_API_KEY);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: POLYGON_TESTNET_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // apiKey: ETHERSCAN_API_KEY
    apiKey: POLYGONSCAN_API_KEY
  }
};

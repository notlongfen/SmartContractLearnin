const { accessListify } = require("ethers");

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("dotenv").config()
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.19",
  solidity: {
    compilers: [{version: "0.8.8"}, {version: "0.6.6"}]
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  gasReporter: {
    enabled: true,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    }
  }
};

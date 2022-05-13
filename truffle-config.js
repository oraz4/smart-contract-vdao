require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
     },

     advanced: {
       websockets: true
     },

  bsc: {
    provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://bsc-dataseed1.binance.org`,0),
    gas: 1246759,
    gasPrice: 5 * 10 ** 9,
    network_id: 56,
    confirmations: 10,
    timeoutBlocks: 200,
    skipDryRun: true
  },
      
      
  bscTestnet: {
    provider: () => new HDWalletProvider(
    process.env.MNEMONIC,
      'https://data-seed-prebsc-1-s1.binance.org:8545'
    ),
    network_id: 97,
    skipDryRun: true
  },
},

  mocha: {
     //timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.5.6"
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: process.env.BNBAPI
  }
}

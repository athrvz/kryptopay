// url of the project on alchemy.com
// https://eth-ropsten.alchemyapi.io/v2/Qu4SiPrR2K-4uB0sTRLexuPmODIhGcEm
// accounts arr holds the private key

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', 
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Qu4SiPrR2K-4uB0sTRLexuPmODIhGcEm',
      accounts: ['d7107f23d5132ee51ab09cfd6f1bd0cfc5a7749a38d575c0669d708177d5c27a']
    }
  }
}
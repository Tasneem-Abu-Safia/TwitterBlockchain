require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/bspd4dmGdlvQVSPqwr2QYN-mBwDYKIB7',
      accounts: [
        '8bf2059e7993a72977ce32c01fd72afb90917a05d724c253f804c140bb92eff6',
      ],
    },
  },
}

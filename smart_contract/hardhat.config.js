require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TlXxyRp0wMYUWlKExwKubVo8uF3UX84g',
      accounts: [
        '2a74c9a76099291357fe64b25da8093f05cfc2c775165a2683f160168cb9f943',
      ],
    },
  },
};

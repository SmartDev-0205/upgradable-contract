require("@nomiclabs/hardhat-ethers");

require("@openzeppelin/hardhat-upgrades");

require("@nomicfoundation/hardhat-verify");

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
		compilers: [
			{
				version: "0.6.12",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.4.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.5.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.8.18",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
      {
				version: "0.8.19",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
      {
				version: "0.8.20",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
		]
	},
 defaultNetwork: "hardhat",
 networks: {
   localhost: {
     chainId: 31337,
   },
   goerli: {
     url: "https://endpoints.omniatech.io/v1/eth/goerli/public",
     accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
     chainId: 5,
   },
   fantomtest: {
    url: "https://fantom.api.onfinality.io/public",
    accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    chainId: 4002,
  }
 },
 etherscan: {
   apiKey: "FWMTC7FVD2YRQZA8WRSPD5N37V7TI728T3",
 },
};
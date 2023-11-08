Followed this blog.
https://blog.chain.link/upgradable-smart-contracts/
Verify: npx hardhat verify --network goerli 0x649bdc4495b039d589af36eefa6f1a3ddddbb658

Test on blockchain

yarn hardhat console --network goerli
const PriceFeedTracker = await ethers.getContractFactory("PriceFeedTracker");
const priceFeedTracker = await PriceFeedTracker.attach('<<<< YOUR CONTRACT ADDRESS  >>>>')
(await priceFeedTracker.getAdmin())

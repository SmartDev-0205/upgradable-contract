const {
    ethers,
    upgrades
} = require("hardhat");

async function main() {
    // TODO Check this address is right before deploying.
    const deployedProxyAddress = "0x7ec45f79d381bfcad327d683ef3250a546267113";

    const PriceFeedTrackerV2 = await ethers.getContractFactory(
        "PriceFeedTrackerV2"
    );  
    console.log("Upgrading PriceFeedTracker...");

    await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
    console.log("PriceFeedTracker upgraded");
}

main();
// function deployFunc(){
//     console.log("Hi there");
// }

const { network } = require("hardhat");
const {networkConfig, developmentChain} = require("../helper-hardhat-config");

// module.exports.default = deployFunc;
module.exports = async({getNamedAccounts, deployments }) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId
    let ethUsdPriceFeedAdress;
    if(developmentChain.includes(network.name)){
        const ethUsdPriceAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAdress = ethUsdPriceAggregator.address;
    }else{
        ethUsdPriceFeedAdress = networkConfig[chainId]["ethUsdPriceFeed"];
    }
    const fundMe = await deploy("FundMe",{
        from: deployer,
        args: [address],
        log: true,
    })
    log("-----------------------------------------");
}
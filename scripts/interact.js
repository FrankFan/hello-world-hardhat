const { ethers } = require("ethers");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const { API_KEY, CONTRACT_ADDRESS, PRIVATE_KEY, POLYGON_TESTNET_API_KEY } = process.env;


// Provider
// const alchemyProvider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);
const alchemyProvider = new ethers.providers.AlchemyProvider(network = 'maticmum', POLYGON_TESTNET_API_KEY)

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message.");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

// npx hardhat run scripts/interact.js
main();
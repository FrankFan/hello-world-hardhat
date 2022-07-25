async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    console.log("Contract deployed to address:", hello_world.address);
    // 合约地址： 0xe0f419F8D016FE88F82cEAeC7f34c9262890a6E7
    // Contract deployed to address: 0x5b724bd9fc537b6773ae5D38433080A30C65b7bD
}

// npx hardhat run scripts/deploy.js
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
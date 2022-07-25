# demo for smart contracts with hardhat

## problems

I have deployed the `HelloWorld.sol` contract to goerli testnetwork: `https://goerli.etherscan.io/address/0xe0f419F8D016FE88F82cEAeC7f34c9262890a6E7`, and interact with the contract use `npx hardhat run scripts/interact.js`, all works fine.

but when I verify the contracts with the folling command, the result was failed.

```js
$ npx hardhat verify --network goerli 0xe0f419F8D016FE88F82cEAeC7f34c9262890a6E7 'Hello World!'
Nothing to compile
Error in plugin @nomiclabs/hardhat-etherscan: Invalid API Key

For more info run Hardhat with --show-stack-traces
```

I have checked severl time for my .env prams, there seems no error. 

```env
API_URL = "https://eth-goerli.g.alchemy.com/v2/<goerli_api_key>"
API_KEY = "<goerli_api_key>"
PRIVATE_KEY = "<meta_mask_address_private_key>"
CONTRACT_ADDRESS = "<deployed_contract_address>"
ETHERSCAN_API_KEY = "<registered_in_etherscan.io_key>"
```

I have no idea where the problem was. I'm confuesd for half a day. 

**SOS!!!**

who can help me !!

---

finally I fiexed the issue by using polygon testnet, not using ropsten,rinkeby,goerli etc, because the root cause of `Error in plugin @nomiclabs/hardhat-etherscan: Invalid API Key` maybe Etherscan itself.

## How to run the example ?

```bash
# 1. clean
npx hardhat clean

# 2. compile
npx hardhat compile

# 3. deploy
npx hardhat run scripts/deploy.js

# 4. test the contracts with interact.js
npx hardhat run scripts/interact.js
# meantime， you can check the deails in polygonscan.io
# https://mumbai.polygonscan.com/address/0x5b724bd9fc537b6773ae5D38433080A30C65b7bD

# 5. verify code
npx hardhat verify --network mumbai 0x5b724bd9fc537b6773ae5D38433080A30C65b7bD 'Hello World!'
Nothing to compile
Successfully submitted source code for contract
contracts/HelloWorld.sol:HelloWorld at 0x5b724bd9fc537b6773ae5D38433080A30C65b7bD
for verification on the block explorer. Waiting for verification result...

Successfully verified contract HelloWorld on Etherscan.
https://mumbai.polygonscan.com/address/0x5b724bd9fc537b6773ae5D38433080A30C65b7bD#code
```
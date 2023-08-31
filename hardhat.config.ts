import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-generate-function-selectors";
import * as dotenv from "dotenv";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE_KEY = process.env.PRIVATE_KEY !== undefined
  ? process.env.PRIVATE_KEY
  : "";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      chainId: 81,
      accounts: [PRIVATE_KEY],
    },
    shiden: {
      url: "https://shiden.api.onfinality.io/public",
      chainId: 336,
      accounts: [PRIVATE_KEY],
    },
    astar: {
      url: "https://evm.astar.network",
      chainId: 592,
      accounts: [PRIVATE_KEY],
    },
  },
  functionSelectors: {
    separateContractSelectors: true,
    orderedByValue: true,
  },
};

export default config;

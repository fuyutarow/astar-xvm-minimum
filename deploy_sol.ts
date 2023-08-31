import { ethers } from "hardhat";
import selectorJson from "./selectors.json";

async function main() {
  const contractKeys = Object.keys(selectorJson);

  console.log({ contractKeys });

  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  {
    const key = "Flipper";
    const contractFactory = await ethers.getContractFactory(key);
    const contract = await contractFactory.deploy()
    console.log(key, "address:", contract.address);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

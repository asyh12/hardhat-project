// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const HalalSupplyChain = await hre.ethers.getContractFactory("HalalSupplyChain");
  const contract = await HalalSupplyChain.deploy();

  await contract.waitForDeployment();

  console.log(
    "HalalSupplyChain deployed to:",
    await contract.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

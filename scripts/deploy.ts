import { ethers } from "hardhat";

async function main() {
  const LDY = await ethers.getContractFactory("LDY");
  const deployment = await LDY.deploy();
  const address = await deployment.getAddress();
  console.log(`Contract 'LDY' deployed at: ${address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

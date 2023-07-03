import { ethers } from "hardhat";

async function main() {
  const LTY = await ethers.getContractFactory("LTY");
  const deployment = await LTY.deploy();
  const address = await deployment.getAddress();
  console.log(`Contract 'LTY' deployed at: ${address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

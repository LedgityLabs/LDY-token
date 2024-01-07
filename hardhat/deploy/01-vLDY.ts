import { type DeployFunction } from "hardhat-deploy/dist/types";

module.exports = (async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();

  await deployments.deploy("vLDY", {
    from: deployer,
    contract: "vLDY",
    log: true,
    waitConfirmations: 2,
  });
}) as DeployFunction;

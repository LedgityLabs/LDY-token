import { type DeployFunction } from "hardhat-deploy/dist/types";
import { parseUnits } from "viem";

module.exports = (async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();

  await deployments.deploy("TSTTOKEN", {
    from: deployer,
    contract: "TSTTOKEN",
    log: true,
    waitConfirmations: 2,
    args: ["Test Token", "TSTTOKEN", 18, parseUnits(String(75_000_000), 18)],
    deterministicDeployment: false,
  });
}) as DeployFunction;
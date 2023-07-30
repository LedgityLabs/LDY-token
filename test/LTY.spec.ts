import { expect } from "chai";
import { ethers } from "hardhat";
import { LDY } from "../typechain-types";

describe("LDY contract", function () {
  let deployment: LDY;

  before(async function () {
    const LDY = await ethers.getContractFactory("LDY");
    deployment = await LDY.deploy();
  });

  // Test case
  it("Should have a total supply of 100M tokens", async function () {
    const expectedSupply = ethers.parseUnits("100000000", 18);
    const totalSupply = await deployment.totalSupply();
    expect(totalSupply).to.equal(expectedSupply);
  });
});

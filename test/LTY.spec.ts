import { expect } from "chai";
import { ethers } from "hardhat";
import { LTY } from "../typechain-types";

describe("LTY contract", function () {

  let deployment: LTY;

  before(async function () {
    const LTY = await ethers.getContractFactory("LTY");
    deployment = await LTY.deploy();
  });

  // Test case
  it("Should have a total supply of 100M tokens", async function () {
    const expectedSupply = ethers.parseUnits("100000000", 18);    
    const totalSupply = await deployment.totalSupply();
    expect(totalSupply).to.equal(expectedSupply);
  });
});
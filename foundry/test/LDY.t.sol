// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/forge-std/src/Test.sol";
import {vLDY} from "../../src/vLDY.sol";
import {LDY} from "../../src/LDY.sol";

contract Tests is Test {
    vLDY vestedLDY;
    LDY tested;

    function setUp() public {
        // Deploy vLDY contract
        vestedLDY = new vLDY();
        vm.label(address(vestedLDY), "vLDY");

        // Deploy LDY contract
        tested = new LDY(address(vestedLDY));
        vm.label(address(tested), "LDY");
    }

    // ===========================
    // === decimals() function ===
    function test_decimals_1() public {
        console.log("Should return 18");
        assertEq(tested.decimals(), 18);
    }

    // =======================
    // === name() function ===
    function test_name_1() public {
        console.log("Should return 'Ledgity Token'");
        assertEq(tested.name(), "Ledgity Token");
    }

    // =========================
    // === symbol() function ===
    function test_symbol_1() public {
        console.log("Should return 'LDY'");
        assertEq(tested.symbol(), "LDY");
    }

    // ======================
    // === cap() function ===
    function test_cap_1() public {
        console.log("Should return 75,000,000 * 10 ** 18");
        assertEq(tested.cap(), 75_000_000 * 10 ** 18);
    }

    // ====================
    // === balanceOf() ====
    function test_balanceOf_1() public {
        console.log("Shouldn't mint any LDY to contract deployer");
        assertEq(tested.balanceOf(address(this)), 0);
    }
}

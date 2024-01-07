// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../lib/forge-std/src/Test.sol";
import {vLDY} from "../../src/vLDY.sol";

contract Tests is Test {
    vLDY tested;

    function setUp() public {
        // Deploy vLDY contract
        tested = new vLDY();
        vm.label(address(tested), "vLDY");
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
        console.log("Should return 'Vested Ledgity Token'");
        assertEq(tested.name(), "Vested Ledgity Token");
    }

    // =========================
    // === symbol() function ===
    function test_symbol_1() public {
        console.log("Should return 'vLDY'");
        assertEq(tested.symbol(), "vLDY");
    }

    // ==============================
    // === totalSupply() function ===
    function test_totalSupply_1() public {
        console.log("Should return 75,000,000 * 10 ** 18");
        assertEq(tested.totalSupply(), 75_000_000 * 10 ** 18);
    }

    // ====================
    // === balanceOf() ====
    function test_balanceOf_1() public {
        console.log("Should mint 75M vLDY to contract deployer");
        assertEq(tested.balanceOf(address(this)), 75_000_000 * 10 ** 18);
    }
}

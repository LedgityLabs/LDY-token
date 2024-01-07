// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title LDY
 * @author Lila Rest (lila@ledgity.com)
 * @dev Vested version of the $LDY tokens, can be redeemed for $LDY tokens in a 1:1 ratio.
 * @custom:security-contact security@ledgity.com
 */
contract vLDY is ERC20 {
    constructor() ERC20("Vested Ledgity Token", "vLDY") {
        _mint(msg.sender, 75_000_000 * 10 ** decimals());
    }
}

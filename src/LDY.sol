// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// NOT PRODUCTION READY, DO NOT USE IN PRODUCTION

import {vLDY} from "./vLDY.sol";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Capped} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title LDY
 * @author Lila Rest (lila@ledgity.com)
 * @dev The $LDY is the utility and governance token of the whole Ledgity ecosystem.
 * The $LDY contract inherits from:
 * - [Openzepellin 'ERC20' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20)
 * - [Openzepellin 'ERC20Burnable' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Burnable)
 *
 * It has been designed to be as light as possible and so doesn't implement any additional
 * functions and states in additions to the ones provided by the above Openzepellin contracts.
 *
 * It is non-upgradeable, non-ownable, non-pausable and non-restrictable. It is so safe to use
 * in a DAO context.
 *
 * It's supply is fixed to 75M tokens which are minted at deploy time. There is no way to mint
 * additional tokens in the future.
 *
 * Finally, here are its specifications:
 * - Name: **Ledgity Token**
 * - Symbol: **LDY**
 * - Decimals: **18**
 * - Total supply: **75,000,000 LDY**
 * @custom:security-contact security@ledgity.com
 */
contract LDY is ERC20, ERC20Burnable, ERC20Capped {
    using SafeERC20 for IERC20;

    /// @notice Holds a reference to the vLDY contract.
    vLDY public immutable vestedLDY;

    constructor(
        address vestedLDY_
    ) ERC20("Ledgity Token", "LDY") ERC20Capped(75_000_000 * 10 ** decimals()) {
        require(vestedLDY_ != address(0), "vLDY address cannot be the zero address");
        vestedLDY = vLDY(vestedLDY_);
    }

    function mint(uint256 amount) external {
        require(vestedLDY.balanceOf(msg.sender) >= amount, "Not enough vLDY");
        SafeERC20.safeTransferFrom(vestedLDY, msg.sender, address(this), amount);
        _mint(msg.sender, amount);
    }

    /**
     * @notice Required override of _update() which is implemented by both
     * ERC20 and ERC20Capped parent contracts.
     * @dev The ERC20Capped version is preferred because it enforce the 75M cap
     * @inheritdoc ERC20Capped
     */
    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Capped) {
        ERC20Capped._update(from, to, value);
    }
}

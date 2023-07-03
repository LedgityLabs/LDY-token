// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

/**
 * @title LTY
 * @author Lila Rest (lila@ledgity.com)
 * @dev The $LTY is the utility and governance token of the whole Ledgity ecosystem.
 * The $LTY contract inherits from:
 * - [Openzepellin 'ERC20' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20)
 * - [Openzepellin 'ERC20Burnable' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Burnable)
 *
 * It has been designed to be as light as possible and so doesn't implement any additional
 * functions and states in additions to the ones provided by the above Openzepellin contracts.
 *
 * It is non-upgradeable, non-ownable, non-pausable and non-restrictable. It is so safe to use
 * in a DAO context.
 *
 * It's supply is fixed to 100M tokens which are minted at deploy time. There is no way to mint
 * additional tokens in the future.
 *
 * Finally, here are its specifications:
 * - Name: **Ledgity Token**
 * - Symbol: **LTY**
 * - Decimals: **18**
 * - Total supply: **100,000,000 LTY**
 * @custom:security-contact security@ledgity.com
 */
contract LTY is ERC20, ERC20Burnable {
    constructor() ERC20("Ledgity Token", "LTY") {
        _mint(msg.sender, 100_000_000 * 10 ** decimals());
    }
}

# LDY-token

The $LDY is the utility and governance token of the Ledgity ecosystem. This repo holds its contract source code.

## Design

This contract is taken from the official Chainlink CCIP cross-chain token template:
https://github.com/smartcontractkit/ccip/blob/onchain-release/v1.1.0/contracts/src/v0.8/shared/token/ERC677/BurnMintERC677.sol
  
No changes have been made to the original contract; only the imports and folder structure have been reworked. This was done to eliminate hundreds of unused files and to import OpenZeppelin libraries directly from their NPM package.

$LDY token is non-upgradeable, non-pausable, and non-restrictable.

This token is currently used in the following projects:
- [Ledgity.com](https://ledgity.com)
- [Ledgity DeFi](https://ledgity.finance)
- [Ledgity DAO (coming soon)](https://ledgity.org)

Finally, here are its specifications:

- Name: **Ledgity Token**
- Symbol: **LDY**
- Decimals: **18**
- Total supply: **75,000,000 LDY**

## Security

To report any security-related information that may directly or indirectly impact the $LDY token, please email security@ledgity.com.

## License

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.

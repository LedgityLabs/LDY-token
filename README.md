# LTY-token
The $LTY is the utility and governance token of the whole Ledgity ecosystem. This repo holds its contract source code.

This token is currently used in the following projects:
- [Ledgity.com](https://ledgity.com)
- [Ledgity DeFi](https://ledgity.finance)
- [Ledgity DAO (coming soon)](https://ledgity.org)

## Design
The $LTY contract inherits from:
- [Openzepellin 'ERC20' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20)
- [Openzepellin 'ERC20Burnable' contract](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Burnable)

It has been designed to be as light as possible and so doesn't implement any additional functions and states in additions to the ones provided by the above Openzepellin contracts.

It is non-upgradeable, non-ownable, non-pausable and non-restrictable. It is so safe to use in a DAO context.

It's supply is fixed to 100M tokens which are minted at deploy time. There is no way to mint additional tokens in the future.

Finally, here are its specifications:
- Name: **Ledgity Token**
- Symbol: **LTY**
- Decimals: **18**
- Total supply: **100,000,000 LTY**

## Security
To report any security-related information that may directly or indirectly have an impact on the $LTY token, please reach us at security@ledgity.com.

## License
This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.
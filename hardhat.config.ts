import { type HardhatUserConfig } from "hardhat/config";
import "hardhat-contract-sizer";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-verify";

// Retrieve deployer private key from secrets.json (if available)
let deployerPrivateKey: string | undefined;
try {
  const secrets = require("./secrets.json");
  deployerPrivateKey = secrets.CONTRACT_DEPLOYER_PRIVATE_KEY;
} catch (e) {}

// Retrieve Lineascan API key from secrets.json (if available)
let etherscanApiKey: string | undefined;
try {
  const secrets = require("./secrets.json");
  etherscanApiKey = secrets.ETHERSCAN_API_KEY;
} catch (e) {}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      evmVersion: "london",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts",
    deploy: "./hardhat/deploy",
    deployments: "./hardhat/deployments",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {
      // Is used to fix gas estimation error
      // See: https://github.com/NomicFoundation/hardhat/issues/3089#issuecomment-1366428941
      initialBaseFeePerGas: 0,
    },
    ethereum: {
      chainId: 1,
      url: "https://mainnet.infura.io/v3/05368c74554249babb6f126ccf325401",
      accounts: deployerPrivateKey ? [deployerPrivateKey] : [],
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: etherscanApiKey,
          apiUrl: "https://api.etherscan.io/",
        },
      },
    },
    ethereumGoerli: {
      chainId: 5,
      url: "https://goerli.infura.io/v3/05368c74554249babb6f126ccf325401",
      accounts: deployerPrivateKey ? [deployerPrivateKey] : [],
      saveDeployments: true,
    },
  },
  etherscan: {
    apiKey: {
      ethereum: etherscanApiKey!,
    },
  },
  defaultNetwork: "hardhat",
};

export default config;

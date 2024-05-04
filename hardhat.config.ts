import { type HardhatUserConfig } from "hardhat/config";
import "hardhat-contract-sizer";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-verify";
import { setupSafeDeployer } from "hardhat-safe-deployer";
import { Wallet } from "@ethersproject/wallet";
import yargs from "yargs";

// Retrieve network from command line arguments
const argv = yargs
  .option("network", {
    type: "string",
    default: "hardhat",
  })
  .help(false)
  .version(false).argv;

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

// Retrive Arbiscan API key from secrets.json (if available)
let arbiscanApiKey: string | undefined;
try {
  const secrets = require("./secrets.json");
  arbiscanApiKey = secrets.ARBISCAN_API_KEY;
} catch (e) {}

// Retrive BaseScan API key from secrets.json (if available)
let basescanApiKey: string | undefined;
try {
  const secrets = require("./secrets.json");
  basescanApiKey = secrets.BASESCAN_API_KEY;
} catch (e) {}

const safes = {
  arbitrum: {
    address: "0x972c17D0adA071db4a0395505dD3Ad0a80809053",
    url: "https://safe-transaction-arbitrum.safe.global",
  },
  ethereum: {
    address: "0x30Fa557608017afB6E8e4ABe8027787C00473FF0",
    url: "https://safe-transaction.ethereum.safe.global",
  },
  base: {
    address: "0x2E816EA2A7Db3DB4C74298cae0d455f0F800E92A",
    url: "https://safe-transaction.base.safe.global",
  },
  hardhat: {
    address: "0x0",
    url: "https://willfail.com",
  },
};
const safeAddress = safes[argv.network as keyof typeof safes].address;
const safeUrl = safes[argv.network as keyof typeof safes].url;

setupSafeDeployer(
  new Wallet(deployerPrivateKey!),
  safeAddress,
  safeUrl
)

console.log("SAFE INFOS")
console.log("Network:", argv.network)
console.log("Address:", safeAddress)
console.log("URL:", safeUrl)

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
    deployer: safeAddress
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
    arbitrum: {
      chainId: 42161,
      url: "https://arbitrum-mainnet.infura.io/v3/05368c74554249babb6f126ccf325401",
      accounts: deployerPrivateKey ? [deployerPrivateKey] : [],
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: arbiscanApiKey,
          apiUrl: "https://api.arbiscan.io/",
        },
      },
    },
    base: {
      chainId: 8453,
      url: "https://base-mainnet.g.alchemy.com/v2/XH9V8IOVLgFCIP-EAflB27MR0Bc5oVoO",
      accounts: deployerPrivateKey ? [deployerPrivateKey] : [],
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: basescanApiKey,
          apiUrl: "https://api.basescan.org",
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

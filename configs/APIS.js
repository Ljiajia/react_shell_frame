import { target } from "../package.json";
//dev
const ADDRESSAPI_DEV = "https://dev-chain-gate.valicn.com";

//beta
const ADDRESSAPI_BETA = "https://beta-chain-gate.valicn.com";

//dawn
const ADDRESSAPI_DAWN = "https://chain.api.fshares.io";

//release
const ADDRESSAPI_RELEASE = "https://chain.api.fshares.com";

let ADDRESSAPI;
switch (target) {
  case "dev":
    ADDRESSAPI = ADDRESSAPI_DEV;
    break;
  case "beta":
    ADDRESSAPI = ADDRESSAPI_BETA;
    break;
  case "dawn":
    ADDRESSAPI = ADDRESSAPI_DAWN;
    break;
  case "release":
    ADDRESSAPI = ADDRESSAPI_RELEASE;
    break;
  default:
    break;
}

export { ADDRESSAPI };

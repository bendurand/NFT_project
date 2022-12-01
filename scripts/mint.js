// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach("0x47ee3c385b577a48e630f9265c0c85c69ba4fbc1");

  await tiketEvent.mintNFT("0xEbD05b2e709D17857E0e12e2067D15900064dc90", "https://gateway.pinata.cloud/ipfs/QmePapaXEVfiNwxYeRh2dy7dx6wQKcAhu2yVfRLYemgrNH/NFT_france_allblacks_vert.png");

  console.log(
    ` deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
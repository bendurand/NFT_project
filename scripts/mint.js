// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach("0xBEb96213BC62971206795341E7cEC3310a9f1A3E");

  await tiketEvent.mintNFT("0xEbD05b2e709D17857E0e12e2067D15900064dc90", "QmZ5dbhXs9piBkuxtJyBbr6BfVbkDo8mhuRqv8hWmmVGmv");

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
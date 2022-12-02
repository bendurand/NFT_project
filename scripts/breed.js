// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const _smart_contract_address = "0xBEb96213BC62971206795341E7cEC3310a9f1A3E"

  const _user_address = "0xEbD05b2e709D17857E0e12e2067D15900064dc90"

  const _category1 = "QmZ5dbhXs9piBkuxtJyBbr6BfVbkDo8mhuRqv8hWmmVGmv"
  const _category2 = "QmVqcD5DZx9yrY6f6ZJ1xTXksk8YsR2HutKrpy481xciQK"
  const _category3 = "QmXv1LAfD5qfg7yZQ6RHtAYb1DhSKJ5MSHzKs6SP4dSPkp"
  const _category4 = "QmZ9pKkCXnLrpxmJuKKT2LoFoevBSc5VmUMFGKn698MWRQ"
  const _category5 = "QmXDgpBFmq9qNao1HQsWCmaUXTp1Pr2MwL6FgohpewdsvT"

  const TiketEvent = await hre.ethers.getContractFactory("tiketEvent");
  const tiketEvent = await TiketEvent.attach(_smart_contract_address);

  await tiketEvent.fusion(9,10,_user_address, _category3);

  console.log(
    ` breeded and deployed to ${tiketEvent.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
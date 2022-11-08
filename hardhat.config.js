require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/xPACxJYzW3ovyVZS_NMuOHO-BZaKcF2d",
      accounts:["42eb4e7084f88169b4ce98ab30f50cdb90db301278236f58fd37410c93970152"],
    },
  },
};
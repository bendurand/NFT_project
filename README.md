# NFT Rugby Match School Project

## Authors

DURAND Benjamin - RENOUF Titus - GU Haozhou

---

## Description

In this repository you will find an application which feeds an online ticketing on Opensea website for rugby match.

The originality of our project is that you can breed two tickets in order to obtain one better seatted ticket.

Click on the links below to visit our ticketing and our commercial presentation.

[See our ticketing](https://testnets.opensea.io/collection/france-allblacks-2021-nft-tickets)

[See our commercial presentation](https://rugby-match-nft.my.canva.site/#page-0)

---

## How to run

### Mint a Ticket-NFT

- Open `mint.js` file in the `scripts` folder
- In the function `.minNFT()` at line 24 replace the argument _category by the one you want (it will define the category of the seat and the image of the NFT)
- Run in the terminal
```
npx hardhat run scripts/mint.js
```
- Your ticket is added to the ticketing website you can see it [here](https://testnets.opensea.io/collection/france-allblacks-2021-nft-tickets)


### Breed two Ticket-NFT

- Open `breed.js` file in the `scripts` folder
- In the function `.fusion()` at line 24 replace the two first arguments by your parent's tokenID, the _user_address argument by your wallet address ,and the argument _category by the new category you will obtain (one above the parent's category).
- Run in the terminal
```
npx hardhat run scripts/breed.js
```
- Your two parents tickets are burnt and your new ticket is added to your collection.
---

## Extras

You can find :
- the NFT's images in the folder `Images`
- the NFT's metadata in the folder `metadatas`
- the smartcontract in the folder `contracts`
- the script to deploy smart contracts in `scripts/deploy.js`
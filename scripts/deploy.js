const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT")
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()
  console.log("Contrato implantado em:", nftContract.address)
  // Chama a função.
  let txn = await nftContract.makeAnEpicNFT()
  // Espera ela ser minerada.
  await txn.wait()
  console.log("Cunhou NFT #1")
  txn = await nftContract.makeAnEpicNFT()
  // Espera ela ser minerada.
  await txn.wait()
  console.log("Cunhou NFT #2")
}
const runMain = async () => {

  <button  className="cta-button connect-wallet-button">
        <a href="https://testnets.opensea.io/assets/goerli/0x91fC44fAAbAD7C2e61D1a0aD7B596b756FF4Ee80/0" target="_blank"> 🌊 Exibir coleção no OpenSea</button> 
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
runMain()
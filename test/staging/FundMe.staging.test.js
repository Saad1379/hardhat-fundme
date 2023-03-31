const { inputToConfig } = require("@ethereum-waffle/compiler")
const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

developmentChains.includes(network.chainId)
    ? describe.skip
    : describe("FundMe", async () => {
          describe("FundME", async () => {
              let FundMe
              let deployer
              const sendValue = ethers.utils.parseEther("1")
              beforeEach(async () => {
                  deployer = (await getNamedAccounts()).deployer
                  fundMe = await ethers.getContract("FundMe", deployer)
              })

              it("allows people to fund and withdraw", async () => {
                  await fundMe.fund({ value: sendValue })
                  await fundMe.withdraw()
                  const endingBalance = await fundMe.provider.getBalance(
                      fundMe.address
                  )
                  assert.equal(endingBalance.toString(), "0")
              })
          })
      })

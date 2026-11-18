const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HalalSupplyChain Contract", function () {
  let HalalSupplyChain, halalSupplyChain;
  let admin, farmSupplier, processingPlant, jakim, logistics, retailer, consumer;

  // Role Hash Constants (Must match your Solidity contract)
  const ROLE_FARM_SUPPLIER = ethers.keccak256(ethers.toUtf8Bytes("FARM_SUPPLIER"));
  const ROLE_PROCESSING_PLANT = ethers.keccak256(ethers.toUtf8Bytes("PROCESSING_PLANT"));
  const ROLE_JAKIM = ethers.keccak256(ethers.toUtf8Bytes("JAKIM"));

  beforeEach(async function () {
    // Get signers (accounts)
    [admin, farmSupplier, processingPlant, jakim, logistics, retailer, consumer] = await ethers.getSigners();

    // Deploy contract
    HalalSupplyChain = await ethers.getContractFactory("HalalSupplyChain");
    halalSupplyChain = await HalalSupplyChain.deploy();
  });

  // TEST 1: Role Management (Admin assigns Processing Plant)
  it("Should allow Admin to assign Processing Plant role", async function () {
    // Admin assigns role to processingPlant address
    await halalSupplyChain.connect(admin).assignRole(processingPlant.address, ROLE_PROCESSING_PLANT);

    // Verify role
    const hasRole = await halalSupplyChain.hasRole(processingPlant.address, ROLE_PROCESSING_PLANT);
    expect(hasRole).to.equal(true);
  });

  // TEST 2: Batch Creation (Farm Supplier creates batch)
  it("Should allow Farm Supplier to create a batch", async function () {
    // 1. Admin must first assign the Farm Supplier role
    await halalSupplyChain.connect(admin).assignRole(farmSupplier.address, ROLE_FARM_SUPPLIER);

    // 2. Farm Supplier creates a batch
    await halalSupplyChain.connect(farmSupplier).createBatch("Batch #1: Raw Chicken from Farm A");

    // 3. Verify batch details
    const batch = await halalSupplyChain.getBatch(1);
    expect(batch.details).to.equal("Batch #1: Raw Chicken from Farm A");
    expect(batch.status).to.equal("Raw Chicken Registered");
  });

  // TEST 3: Halal Certification (JAKIM certifies a batch)
  it("Should allow JAKIM to issue Halal Certification", async function () {
    // Setup: Create batch first
    await halalSupplyChain.connect(admin).assignRole(farmSupplier.address, ROLE_FARM_SUPPLIER);
    await halalSupplyChain.connect(farmSupplier).createBatch("Batch #2: For Certification");

    // 1. Admin assigns JAKIM role
    await halalSupplyChain.connect(admin).assignRole(jakim.address, ROLE_JAKIM);

    // 2. JAKIM certifies the batch (generating a fake hash for the cert)
    const certHash = ethers.keccak256(ethers.toUtf8Bytes("HALAL-CERT-2026-001"));
    await halalSupplyChain.connect(jakim).certifyHalal(1, certHash);

    // 3. Verify certification
    const batchData = await halalSupplyChain.getBatch(1);
    expect(batchData.certHash).to.equal(certHash);
  });
});
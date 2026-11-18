# Halal Chicken Nugget Supply Chain Tracking dApp

A blockchain-based Decentralized Application (dApp) developed to improve transparency, traceability, and trust in the halal chicken nugget supply chain. The system uses Ethereum smart contracts to securely record product information, processing stages, shipment updates, and halal certification throughout the supply chain.

This project was developed for **CSCI 4312 – Blockchain and Application**, Semester 1, 2025/2026, at the Kulliyyah of Information and Communication Technology (KICT), International Islamic University Malaysia (IIUM).

## Project Overview

Traditional halal supply chain tracking systems often rely on centralized databases, which may lack transparency and are vulnerable to data manipulation.

This project addresses these concerns by implementing a blockchain-based tracking system where supply chain activities are recorded immutably on the Ethereum blockchain.

The dApp provides a role-based web interface that allows different stakeholders to interact with the smart contract. Consumers can also verify the product's journey and halal certification using a batch ID without requiring special permissions.

## Objectives

- Ensure that only authorized actors can perform specific supply chain operations, particularly halal certification by JAKIM.
- Enable consumers to trace chicken nugget batches from the farm to the retail stage.
- Deploy the smart contract to the Ethereum Sepolia Testnet and integrate it with a web-based frontend using Web3 technology.

## System Actors

The system consists of six main actors:

| Actor | Responsibilities |
|---|---|
| Admin | Assigns and manages roles for system participants. |
| Farm Supplier | Creates and registers new chicken batches. |
| Processing Plant | Updates production stages, including slaughtering, processing, and packaging. |
| Halal Authority (JAKIM) | Reviews batch information and issues halal certification. |
| Logistics | Records shipment locations and delivery status. |
| Retailer | Confirms receipt of product batches. |
| Public User / Consumer | Views batch information and verifies halal status. |

## Key Features

- **Role-Based Access Control (RBAC):** Restricts smart contract functions based on assigned wallet permissions.
- **Batch Registration:** Creates unique batch IDs and records initial product information.
- **Production Tracking:** Records sequential production stages from raw chicken registration to packaging.
- **Halal Certification:** Allows authorized JAKIM accounts to issue blockchain-based halal certification.
- **Shipment Tracking:** Records shipment locations, timestamps, and status updates.
- **Delivery Confirmation:** Allows retailers to confirm product receipt.
- **Consumer Verification:** Enables public users to retrieve batch history and verify halal certification.
- **MetaMask Integration:** Connects users' wallets to the Sepolia Testnet for blockchain transactions.

## Supply Chain Workflow

The product moves through the following stages:

1. **Raw Chicken Registered** – A batch is created and registered by an authorized farm supplier.
2. **Slaughtered** – The processing plant records the slaughtering stage.
3. **Processed** – The processing plant updates the production status.
4. **Packaged** – The processing plant records that the chicken nuggets have been packaged.
5. **Shipped** – Logistics records shipment information, including location and status.
6. **Delivered** – The retailer confirms receipt of the product batch.

Throughout this process, JAKIM can issue halal certification for an existing batch. Consumers can independently verify the certification and view the recorded supply chain history.

## Technology Stack

| Technology | Purpose |
|---|---|
| Solidity (^0.8.20) | Smart contract development |
| Hardhat | Smart contract compilation, testing, and deployment |
| Ethereum Sepolia Testnet | Blockchain network for deployment |
| Ethers.js (v6.7.0) | Frontend-to-blockchain interaction |
| HTML, CSS, JavaScript | Web-based user interface |
| MetaMask | Wallet connection and transaction signing |
| Mocha & Chai | Automated smart contract testing |
| Node.js | JavaScript development environment |

## System Architecture

The application follows a three-tier dApp architecture:

1. **Presentation Layer (Frontend):** HTML, CSS, and JavaScript provide interfaces for different supply chain actors and consumers.
2. **Integration Layer (Web3):** Ethers.js connects the frontend to the Ethereum blockchain through MetaMask.
3. **Blockchain Layer (Backend):** The Solidity smart contract deployed on Sepolia manages roles, batch information, halal certification, and shipment records.

## Smart Contract Functions

The `HalalSupplyChain` smart contract provides the following core functions:

| Function | Description |
|---|---|
| `assignRole()` | Assigns permissions to participant wallet addresses. |
| `createBatch()` | Registers a new chicken nugget batch. |
| `updateStage()` | Updates the production stage while enforcing sequential progression. |
| `certifyHalal()` | Records halal certification and its cryptographic hash. |
| `recordShipment()` | Stores shipment location and status information. |
| `confirmReceived()` | Confirms product delivery to the retailer. |
| `getBatch()` | Retrieves batch details and halal certification information. |
| `getShipmentHistory()` | Retrieves the shipment history of a batch. |

## Testing and Results

Automated unit testing was implemented using Hardhat, Mocha, and Chai to validate the smart contract functionality.

Three main test scenarios were performed:

1. **Role Management:** Verified that the admin can assign roles to participant addresses.
2. **Batch Creation:** Verified that an authorized farm supplier can create a batch and store its information correctly.
3. **Halal Certification:** Verified that JAKIM can issue certification and that the corresponding cryptographic hash is stored correctly.

**Testing Results:** All three automated test scenarios passed successfully (3 passing).

An additional security validation test was performed to ensure that unauthorized users cannot create batches. The transaction was successfully reverted when an account without the required role attempted to execute the function.

## Project Limitations

The current prototype has several limitations:

- **Physical Product Verification:** Blockchain records cannot independently prevent physical product substitution during transportation.
- **Transaction Costs:** Ethereum transactions require gas fees, which may be costly for frequent supply chain updates.
- **Scalability:** Retrieving large volumes of batch records may require additional indexing solutions.
- **Adoption:** Supply chain workers may require training to use blockchain wallets and interact with the dApp.

## Future Improvements

Potential improvements include:

- Integrating RFID technology to connect physical products with their digital blockchain records.
- Exploring Layer-2 blockchain networks to reduce transaction costs.
- Implementing indexing services to improve data retrieval and scalability.
- Improving the user interface and accessibility for real-world supply chain participants.

## Team Members

| Name | Matric No. |
|---|---|
| Nuramiratul Aisyah Binti Ruzaidi | 2212736 |
| Anis Nazira Binti Abd Ghani | 2219732 |

**Group:** Skittle  
**Course:** CSCI 4312 – Blockchain and Application  
**Institution:** International Islamic University Malaysia (IIUM)

## Disclaimer

This project is an academic prototype developed for educational purposes. It demonstrates the use of blockchain technology for halal supply chain traceability and is not an officially certified commercial halal tracking system.
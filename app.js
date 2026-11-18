// 1. PASTE YOUR CONTRACT ADDRESS HERE
const contractAddress = "0x50828aC0Ef00e96C4b0fee0D6F76A6046d37aF1c";

// 2. PASTE THE ABI YOU COPIED HERE (Between the brackets)
const contractABI = [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "details", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "BatchCreated", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "BatchReceived", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "certHash", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "HalalCertified", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "RoleAssigned", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "RoleRevoked", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "location", "type": "string" }, { "indexed": false, "internalType": "string", "name": "status", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "ShipmentRecorded", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "indexed": false, "internalType": "enum HalalSupplyChain.Stage", "name": "newStage", "type": "uint8" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "StageUpdated", "type": "event" },
    { "inputs": [], "name": "ROLE_FARM_SUPPLIER", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ROLE_JAKIM", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ROLE_LOGISTICS", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ROLE_PROCESSING_PLANT", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "ROLE_RETAILER", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "assignRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "batchCounter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "internalType": "bytes32", "name": "certHash", "type": "bytes32" }], "name": "certifyHalal", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }], "name": "confirmReceived", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "details", "type": "string" }], "name": "createBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }], "name": "getBatch", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "details", "type": "string" }, { "internalType": "string", "name": "stage", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "uint256", "name": "createdAt", "type": "uint256" }, { "internalType": "bytes32", "name": "certHash", "type": "bytes32" }, { "internalType": "uint256", "name": "certifiedAt", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }], "name": "getShipmentHistory", "outputs": [{ "components": [{ "internalType": "string", "name": "location", "type": "string" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }, { "internalType": "string", "name": "status", "type": "string" }], "internalType": "struct HalalSupplyChain.Shipment[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "enum HalalSupplyChain.Stage", "name": "stage", "type": "uint8" }], "name": "getStageString", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "internalType": "string", "name": "location", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }], "name": "recordShipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "batchId", "type": "uint256" }, { "internalType": "enum HalalSupplyChain.Stage", "name": "newStage", "type": "uint8" }], "name": "updateStage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
];

let provider, signer, contract;

async function connectWallet() {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const address = await signer.getAddress();
        
        document.getElementById("walletAddress").innerText = address;
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        alert("Wallet Connected!");
    } else {
        alert("Please install MetaMask!");
    }
}

// === UI FUNCTIONS ===
function showView(viewId) {
    // Hide all sections first
    document.querySelectorAll('.section.hidden').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.section').forEach(el => {
        if (!el.classList.contains('hidden')) el.style.display = 'block'; 
    });
    
    // Hide specific role views
    ['admin', 'processing', 'jakim', 'logistics', 'retailer', 'public'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });
    
    // Show the selected view
    const selected = document.getElementById(viewId);
    if(selected) selected.style.display = 'block';
}

// === SMART CONTRACT FUNCTIONS ===

async function assignRole() {
    const address = document.getElementById("roleAddress").value;
    const roleString = document.getElementById("roleSelect").value;
    const roleHash = ethers.keccak256(ethers.toUtf8Bytes(roleString));
    
    try {
        const tx = await contract.assignRole(address, roleHash);
        await tx.wait();
        alert("Role Assigned! Transaction Hash: " + tx.hash);
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

async function createBatch() {
    const details = document.getElementById("batchDetails").value;
    try {
        const tx = await contract.createBatch(details);
        await tx.wait();
        alert("Batch Created! ID will be Batch Counter + 1");
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

async function updateStage() {
    const id = document.getElementById("processBatchId").value;
    const stage = document.getElementById("processStage").value;
    try {
        const tx = await contract.updateStage(id, stage);
        await tx.wait();
        alert("Stage Updated!");
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

async function certifyHalal() {
    const id = document.getElementById("certBatchId").value;
    const certString = document.getElementById("certHash").value;
    const certHash = ethers.keccak256(ethers.toUtf8Bytes(certString));
    try {
        const tx = await contract.certifyHalal(id, certHash);
        await tx.wait();
        alert("Halal Certified!");
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

// === LOGISTICS FUNCTION ===
async function recordShipment() {
    const id = document.getElementById("shipBatchId").value;
    const location = document.getElementById("shipLocation").value;
    const status = document.getElementById("shipStatus").value;

    try {
        const tx = await contract.recordShipment(id, location, status);
        await tx.wait();
        alert("Shipment Recorded! Batch Stage is now 'Shipped'.");
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

// === RETAILER FUNCTION ===
async function confirmReceived() {
    const id = document.getElementById("retailBatchId").value;
    try {
        const tx = await contract.confirmReceived(id);
        await tx.wait();
        alert("Receipt Confirmed! Batch Stage is now 'Delivered'.");
    } catch (err) {
        console.error(err);
        alert("Error: " + (err.reason || err.message));
    }
}

async function getBatchDetails() {
    const id = document.getElementById("trackBatchId").value;
    try {
        const data = await contract.getBatch(id);
        
        const isHalal = data[5] !== ethers.ZeroHash ? "✅ CERTIFIED HALAL" : "❌ PENDING";
        
        const html = `
            <p><strong>ID:</strong> ${data[0]}</p>
            <p><strong>Details:</strong> ${data[1]}</p>
            <p><strong>Current Stage:</strong> ${data[2]}</p>
            <p><strong>Halal Status:</strong> ${isHalal}</p>
        `;
        document.getElementById("trackingResult").innerHTML = html;
    } catch (err) {
        console.error(err);
        alert("Batch not found or Error.");
    }
}
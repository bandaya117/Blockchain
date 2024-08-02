const { GENESIS_DATA } = require('./config'); // Ensure the path to your config file is correct

class Block {
    constructor({ timestamp, data, hash, prevHash }) { // Fixed typo: 'timestap' to 'timestamp' and 'Hash' to 'hash'
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.prevHash = prevHash; // Fixed typo: 'Prevhash' to 'prevHash'
    }

    static genesisBlock() {
        return new this(GENESIS_DATA);
    }
}

// Instantiate the Block class with the genesis block-v;
const block1 = new Block({
    timestamp: "1",
    prevHash: "000000", // Fixed property name
    hash: "1234", // Fixed property name
    data: "genesis"
});

const genesisBlock = Block.genesisBlock();
console.log(genesisBlock);

console.log(block1);
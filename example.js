const Block = require("./Block");
const Blockchain = require("./Blockchain");

// setup a new blockchain
let testBlockchain = new Blockchain();

// add some random data
console.log("Mining block 1...");
testBlockchain.addBlock(new Block({ amount: 4 }));
console.log("Mining block 2...");
testBlockchain.addBlock(new Block({ amount: 10 }));

// see output
console.log(JSON.stringify(testBlockchain, null, 4));
console.log("Blockchain valid? " + testBlockchain.isChainValid());

// tamper with Blockchain
testBlockchain.chain[1].data = { amount: 100 };
console.log(
	"Blockchain valid after tampering? " + testBlockchain.isChainValid()
);

// recalculate hash for order
testBlockchain.chain[1].hash = testBlockchain.chain[1].calculateHash();
console.log(
	"Blockchain valid after fixing hash order? " + testBlockchain.isChainValid()
);

const Block = require("./Block.js");

class Blockchain {
	constructor() {
		let genesisBlock = this.createGenesisBlock();

		this.difficulty = 5;
		this.genesisTimeStamp = genesisBlock.timestamp;
		this.chain = [genesisBlock];
	}

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currBlock = this.chain[i];
			const prevBlock = this.chain[i - 1];

			if (currBlock.hash !== currBlock.calculateHash()) {
				return false;
			}

			if (currBlock.previousHash !== prevBlock.hash) {
				return false;
			}
		}

		return true;
	}

	createGenesisBlock() {
		return new Block("Genesis");
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.mineBlock(this.difficulty);

		this.chain.push(newBlock);
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}
}

module.exports = Blockchain;

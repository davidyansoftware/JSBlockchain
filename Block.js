const SHA256 = require("crypto-js/sha256");

class Block {
	constructor(data) {
		this.data = data;

		this.timestamp = new Date().getTime();
		this.nonce = 0;

		this.previousHash = "0";
		this.hash = this.calculateHash();
	}

	mineBlock(difficulty) {
		while (
			this.hash.substring(0, difficulty) !== "0".repeat(difficulty)
		) {
			this.nonce++;
			this.hash = this.calculateHash();
		}

		console.log("Block Mined: " + this.hash);
	}

	calculateHash() {
		return SHA256(
			JSON.stringify(this.data) +
				this.timestamp +
				this.nonce +
				this.previousHash
		).toString();
	}
}

module.exports = Block;

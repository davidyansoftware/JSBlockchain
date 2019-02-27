# Javascript Blockchain

A simple blockchain implimentation that can hold arbitrary data.

## Example

This project contains a sample usage of this blockchain by adding arbitrary data, and then checking validity before and after tampering. It's tampered by altering the data, as well as altering the stored hashes.

The example will demonstrate that the blockchain can confirm validity before it is tampered with, and that tampering can be detected, rendering the blockchain invalid.

```
npm install
node example.js
```

### Dependencies

crypto-js - crypto library for sha-256 hashing of blocks

## Blockchain concepts

### Block

Each block can hold an arbitrary Javascript object as data. It also stores a timestamp of when it was added to the chain, a hash of the contents of the previous block in the chain. Finally, it stores a hash of its own contents, and a nonce that will need to be incremented to change its own hash to meet mining parameters.

### Blockchain

The blockchain is an of blocks, starting with a "Genesis" block. It stores a timestamp of when the block was created, an array of the existing blocks, and a difficulty value to determine how hard it is to mine each block. From this information we can add new blocks, and determine if the block chain has been tampered with.

### Mining

The importance of the block chain is to mine blocks as they are added to the blockchain. Mining a block involves incrementing the nonce until the hash of the block meets a criteria based on difficulty. In this case, the criteria we use is the hash starts with '0's equal to the difficulty. Once this value has been found, it is stored in the block chain.

### Validity

Using the stored hashes we can quickly determine if any element in the block chain has been tampered with. Since each block stores its own hash, the blockchain can quickly calculate the has of the block and check that it matches its stored value. Because of the difficulty of finding duplicate hashes, it would be hard for anyone to alter the block to store arbitrary data. Additionally, since each block stores the hash of the block before it, we can check the stored value against the hash of the block to ensure the whole block hasn't been replaced.
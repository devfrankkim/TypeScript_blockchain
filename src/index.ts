import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  // couldn't add fake blocks but I could update already exist block in block chain
  // solution -> Read only

  public readonly hash: string;

  // create block
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    // hash the data
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // ======== not safe ========
    // return this.blocks;

    // ======== Solution ========
    // get a new array
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

blockchain.getBlocks().push(new Block("xxxx", 1111, "Hacked"));

/*
  Block {
    prevHash: 'xxxx',
    height: 1111,
    data: 'Hacked',
    hash: '2557a40e61d8e907f833ae8cb165b776a9e6f3acfd26d1e92958311ad0df2645'
  }
*/

console.log(blockchain.getBlocks());

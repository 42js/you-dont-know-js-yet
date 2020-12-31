"use strict";

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

function getSymbolRangeOf(idx, symbols) {
  if (idx < 0) {
    return symbols[symbols.length - 1];
  }
  return symbols[idx % symbols.length];
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const moves = [-1, 0, 1];
    const reelRows = [];
    for (const move of moves) {
      const reelRow = [];
      this.reels.forEach(reel => {
        const curPosition = reel.position + move;
        const symbol = getSymbolRangeOf(curPosition, reel.symbols);
        reelRow.push(symbol);
      });
      reelRows.push(reelRow.join("|"));
    }
    return reelRows.join("\n");
  },
};

slotMachine.spin();
console.log(slotMachine.display());

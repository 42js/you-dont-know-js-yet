function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
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
    function display_above(curr_reel) {
      const above = curr_reel.position - 1;
      return reel.symbols[above < 0 ? reel.symbols.length - 1 : above];
    }

    function display_below(curr_reel) {
      return reel.symbols[(curr_reel.position + 1) % (reel.symbols.length - 1)];
    }
    console.log(
      `${display_above(this.reels[0])} | ${display_above(
        this.reels[1]
      )} | ${display_above(this.reels[2])}`
    );
    console.log(
      `${this.reels[0].display()} | ${this.reels[1].display()} | ${this.reels[2].display()}`
    );
    console.log(
      `${display_below(this.reels[0])} | ${display_below(
        this.reels[1]
      )} | ${display_below(this.reels[2])}`
    );
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀
slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★

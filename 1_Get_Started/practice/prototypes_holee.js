"use strict"

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = { 
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax( 
                this.symbols.length - 1
            ); 
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length; 
    },
    display() {
        if (this.position == null) {
            this.position = randMax( 
                this.symbols.length - 1
            ); 
        }
        return this.symbols[this.position]; 
    }
};

var slotMachine = { 
    reels: [
        Object.create(reel),
        Object.create(reel),
        Object.create(reel),
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){ 
            reel.spin();
        }); 
    },
    display() {
        var result = [];
        var symbol_len = this.reels[0].symbols.length;
        
        this.reels.forEach(reel => {
            let str = [];
            str.push(reel.symbols[reel.position]
                ,reel.symbols[symbol_mod(reel.position - 1, symbol_len)]
                ,reel.symbols[symbol_mod(reel.position + 1, symbol_len)]);
            result.push(str.join(' | '));
        });
        
        return (result.join("\n"));
        
        function symbol_mod(num, len) {
            if (num < 0) {
                return (num + len);
            }
            return (num % len);
        }
    }
};

slotMachine.spin(); 
console.log(slotMachine.display(), "\n"); 
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin(); 
console.log(slotMachine.display()); 
// // Z | X | W
// // W | Y | $
// // $ | Z | *

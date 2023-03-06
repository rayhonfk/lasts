/////////////// call apply bind///
let obj = {
    sayHello:function(a, b, c = "text") {
        console.log(`salom ${this.name} yoshingiz ${a} dami siz ${b} danmisiz ${c} `);
    }
}
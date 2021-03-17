const info  = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({

    text : `Hi my name is ${info.name} and my I'm on the ${info.campus}`,
    e : "oO",
    T : "U "
}))

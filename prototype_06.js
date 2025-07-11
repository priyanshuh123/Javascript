let myHeros = ["Thor , Loki"]



let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.priyanshu = function(){
    console.log(`Priyanshu is Present in all objecct`)
}

Array.prototype.heyPriyanshu = function(){
    console.log(`Priyanshu Say hello`)
}

heroPower.priyanshu()
myHeros.priyanshu()

myHeros.heyPriyanshu()
// heroPower.heyPriyanshu()
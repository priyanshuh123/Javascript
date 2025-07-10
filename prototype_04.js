function multiples(num){
    this.num = num;
    return num*5
}

multiples.power = 2;



console.log(multiples(5));
console.log(multiples.power);
console.log(multiples.prototype); 


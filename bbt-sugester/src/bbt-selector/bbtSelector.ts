const bases: string[] = ["oolong", "white", "black", "green"];
const flavors: string[] = ["acai berry", "blueberry", "Cherry", "Grapefruit", "Guava", "Green apple", "Honey lemon", "Honeydew", "Honey ginger", "Kiwi", "Lavender", "Lychee", "Lemon", "Mulberry", "Mango", "Orange", "Papaye", "Passionfruit", "Pina colada", "Peach", "Pineapple", "Pomegranate", "Rose", "Raspberry", "Strawberry", "White peach"];
const toppings: string[] = ["none", "aloe", "coconut jelly", "orea crumbs", "red bean", "pearls", "popping pearls"];

interface Bbt {
    milk: boolean;
    base: string;
    flavor: string;
    topping: string;
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class BBT {
    milk: boolean;
    base: string;
    flavor: string;
    topping: string;

    //probably some kind of interface or map here for the weather api data

    constructor(milk:boolean, base: string, flavor: string, topping?: string){

        this.milk = milk;
        this.base = base;
        this.flavor = flavor;
        this.topping = topping || "none";
 
    }
}
function pickMilk(): boolean {
    //this should not be random since its based off the lactoseIntolerant question
    return getRandomInt(2) === 1;
}

function pickRandom(arr: string[]) : string {
    return arr[getRandomInt(arr.length)].toString();

}

export function genBBT() : BBT{   
    // weather params, mood params, ect.
    //eventually theres going to need to be some kind of logic here

    let milk: boolean = pickMilk();
    let base: string = pickRandom(bases);
    let flavor: string = pickRandom(flavors);
    let topping: string = pickRandom(toppings);
    let newBBT = new BBT(milk, base, flavor, topping);


    return newBBT;
}

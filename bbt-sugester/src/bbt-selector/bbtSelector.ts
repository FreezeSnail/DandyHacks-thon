import { tempuratureIndex, weatherType } from "./bbtOptionEnums"

const bases: string[] = ["oolong","white","black","green"];
const flavors: string[] = ["acai berry","blueberry","Cherry","Grapefruit","Guava","Green apple","Honey lemon","Honeydew","Honey ginger","Kiwi","Lavender","Lychee","Lemon","Mulberry","Mango","Orange","Papaye","Passionfruit","Pina colada","Peach","Pineapple","Pomegranate","Rose","Raspberry","Strawberry","White peach"];
const toppings: string[] = ["none", "aloe","coconut jelly","orea crumbs","red bean","pearls","popping pearls"];

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

function pickBase() : string {
    const randomBase = Math.floor(Math.random() * bases.length);
    return randomBase;
    //return bases[getRandomInt(bases.length)];
}

function pickFlavor(): string {
    const randomFlavor = Math.floor(Math.random() * flavors.length);
    return randomFlavor; //would this work?
    //return flavors[getRandomInt(flavors.length)];
}

function pickTopping(): string { 
    const randomTopping = Math.floor(Math.random() * toppings.length);
    return randomTopping;
    //return toppings[getRandomInt(toppings.length-1)+1] ;
}

export function genBBT(tempurature:tempuratureIndex, weather:weatherType ) : BBT{   // weather params, mood params, ect.
    //eventually theres going to need to be some kind of logic here

    let milk: boolean = pickMilk();
    let base: string = pickBase();
    let flavor: string = pickFlavor();
    let topping: string = pickTopping()
    let newBBT = new BBT(milk, base, flavor, topping);


    return newBBT;
}

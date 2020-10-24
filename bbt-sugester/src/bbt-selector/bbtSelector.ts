import { tempuratureIndex, weatherType } from "./bbtOptionEnums"

const bases: string[] = ["oolong","white","black","green"],
const flavors: string[] = ["acai berry","blueberry","Cherry","Grapefruit","Guava","Green apple","Honey lemon","Honeydew","Honey ginger","Kiwi","Lavender","Lychee","Lemon","Mulberry","Mango","Orange","Papaye","Passionfruit","Pina colada","Peach","Pineapple","Pomegranate","Rose","Raspberry","Strawberry","White peach"],
const toppings: string[] = ["none", "aloe","coconut jelly","orea crumbs","red bean","pearls","popping pearls"]

interface Bbt {
    milk: boolean;
    base: string;
    flavor: string;
    topping: string;
}

function getRandomInt(max) {
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

function pickBase() : string {
    return bases[getRandomInt(bases.length)];
}

function pickFlavor(): string {
    return flavors[getRandomInt(flavors.length)];
}

function pickTopping(): string { 
   return toppings[getRandomInt(toppings.length)];
}

export function genBBt(tempurature:tempuratureIndex, weather:weatherType ) : BBT{   // weather params, mood params, ect.
    //eventually theres going to need to be some kind of logic here

    let base: string = pickBase();
    let flavor: string = pickFlavor();
    let topping: string = pickTopping()
    let newBBT = new BBT(true, base, flavor, topping);


    return newBBT;
}
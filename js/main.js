// objects = key-value pairs!! within curly braces

//let myObject = {name: "Dude", age: 100, alive: true };
/*
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.alive);
*/
/*
console.log(myObject[name]);
console.log(myObject[age]);
console.log(myObject[alive]);
*/
// oh sh!t you need to use quotes***** 
/*
console.log(myObject["name"]);
console.log(myObject["age"]);
console.log(myObject["alive"]);
*/
////////////////////////////////////////////////////////////////////////////////////////////
// so let's create another object!!
/*
let anotherObject = {
    name: "Dude",
    age: 100,
    alive: true,
    hobbies: ["eat","sleep","code"],
    bavarage: {
        morning: "coffee",
        afternoon: "iced tea"
    }
}
console.log(anotherObject.name);
console.log(anotherObject.age);
console.log(anotherObject.alive);
console.log(anotherObject.hobbies[0]);
console.log(anotherObject.hobbies[1]);
console.log(anotherObject.hobbies[2]);
console.log(anotherObject.bavarage.morning);
console.log(anotherObject.bavarage.afternoon);
*/
////////////////////////////////////////////////////////////////////////////
// object = key-value pairs
/*
let myObject = {
    name: "Jack Bulwark",
    age: 100,
    alive: true, 
    hobbies: ["cook","eat","fight","sleep"],
    bavarages: {
        morning: "coffee",
        afternoon: "steak",
    },
    action: function () {
        return "ahrrrr! fear my shadow fortress!";
    }
}
console.log(myObject.name);
console.log(myObject.hobbies[2]);
console.log(myObject["alive"]);
console.log(myObject["bavarages"]["afternoon"]);
console.log(myObject.bavarages.afternoon);
console.log(myObject.action());
console.log(myObject["hobbies"][0]);
*/
///////////////////////////////////////////////////////////////////////////////
// Object 
/*
let myObject = {
    name: "Xian",
    age: 26,
    alive: true, 
    hobbies: ["eat","martial arts","sleep"],
    bavarages: {
        morning: "training",
        afternoon: "eat chicken",
    },
    action: function () {
        return `Time for ${this.bavarages.morning}`;
    } // **** use keyword * this * to pull something from
    // our object
}
console.log(myObject.action());
*/
///////////////////////////////////////////////////////////
// Inheritance!!
/*
const vehicle = {
    wheels: 4,
    engine: "vroom!"
}
let truck = Object.create(vehicle);
truck.doors = 2,

console.log(truck.doors);
console.log(truck.wheels);
console.log(truck.engine);
*/
///////////////////////////////////////////////
// Inheritance!! 
/*
const vehicle = {
    wheels: 4,
    engine: function() {
        return "vrooom!";
    }
}
let truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.wheels); // inheritance****
console.log(truck.engine());
console.log(truck.doors);

let car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "whooosh!";
};
console.log(car.engine());
console.log(car.wheels); // inheritance****
console.log(car.doors);
*/
////////////////////////////////////////////////////////////////////
// inheritance!!!
/*
const vehicle = {
    wheels: 4,
    engine: function() {
        return "vrooom!";
    }
}
let car = Object.create(vehicle); // constructor****
car.doors = 4;
car.engine = function() {
    return "whooosh!";
};
let Tesla = Object.create(car); // constructor****
console.log(Tesla.wheels); // inherited by vehicle***
console.log(Tesla.doors); //  inherited by car****
//console.log(Tesla.engine()); // inherited by car****
Tesla.engine = function() {
    return "shssssr!";
}
console.log(Tesla.engine()); // it's own method****
*/
//////////////////////////////////////////////////////////////////////////////////////
// inheritance!! 
/*
let animals = {
    alive: true,
    mobility: true,
    vision: true,
    brain: "present",
    action: {
        sea: "this animal is swimming!",
        land: "this animal is walking",
        air: "this animal is flying",
    }
}
/////////////////////////////////////////////////////////
let mammal = Object.create(animals);
mammal.legs = 4,
mammal.hunt = function() {
    return "this mammal is hunting";
}
console.log(mammal.alive);
console.log(mammal.mobility);
console.log(mammal.brain);
console.log(mammal.action.land);
console.log(mammal.action.sea);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////
// another example!!!*************
/*
let series = {
    peakyBlinders: "TomShelby",
    gameOfThrones: "JohnSnow",
    moneyHeist: "Berlin",
    mandalorian: "Grogu"
}
console.log(Object.keys(series));
console.log(Object.values(series));
// so now we have a different type of for loop!!!!
// for in loop !!!
for (let title in series) {
    console.log(`On ${title} ${series[title]} is my is my favorite character!`);
}
*/
///////////////////////////////////////////////////////////////////////////////////////
// so let's create again!!
/*
let movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    missionImpossible: "TomCruise"
}
console.log(Object.keys(movieAndHero));
console.log(Object.values(movieAndHero));
*/
/////////////////////////////////////////////////
/*
for (let x in movieAndHero) {
    console.log(x);// to return keys***
    console.log(movieAndHero[x]);// to return values***
}
// **** in for loop it excutes one by one ****
// that's why we see one movie name followed by one hero name
*/
////////////////////////////////////////////////////////////////
/*
let movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    missionImpossible: "TomCruise"
}
console.log(Object.keys(movieAndHero));
console.log(Object.values(movieAndHero));

for (let x in movieAndHero) {
    console.log(`this ${x} movie hero is ${movieAndHero[x]}!`);
}
*/
///////////////////////////////////////////////////////////////////////
/* attributes, methods, how to delete elements or attributes 
or methods, how to check any property */
/*
let movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    blackPanther: "ChadwickBoseman"
}
// adding some attributes or new key-values
movieAndHero.thor = "ChrisHemswroth"; // attribute or a new key-value****
movieAndHero.drStrange = "BenedictCumberbatch" // another one****
// let's add some methods
movieAndHero.drStrange2 = function() {
    return "this movie is coming soon!";
}

console.log(Object.keys(movieAndHero));
console.log(Object.values(movieAndHero));

for (let x in movieAndHero) {
    console.log(x);
    console.log(movieAndHero[x]);
    console.log(`this ${x} movie hero is ${movieAndHero[x]}!`);
}
*/
///////////////////////////////////////////
// to delete any attribute or methods or elements*** to check hasOwnProperty */
/*
let movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    blackPanther: "ChadwickBoseman"
}
// use key-word delete
delete movieAndHero.guardiansOfTheGalaxy;
console.log(movieAndHero.hasOwnProperty("guariandsOfTheGalaxy"));

console.log(Object.keys(movieAndHero));
console.log(Object.values(movieAndHero));

for (let x in movieAndHero) {
    console.log(x);
    console.log(movieAndHero[x]);
    console.log(`this ${x} movie hero is ${movieAndHero[x]}!`);
}
*/
////////////////////////////////////////////////////////////////////
// destructuring objects 
/*
const movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    blackPanther: "ChadwickBoseman"
}

//const {ironMan: myVariable, captainAmerica: myVariable2} = movieAndHero;
//console.log(myVariable);
//console.log(myVariable2);
/////////////////////////////////////////
// best way to name these variables****
const {captainAmerica, ironMan, guardiansOfTheGalaxy, blackPanther} = movieAndHero;
console.log(captainAmerica);
console.log(ironMan);
console.log(guardiansOfTheGalaxy);
console.log(blackPanther);
*/
/////////////////////////////////////////////////////////////////////
// destructuring objects********
/*
const movieAndHero = {
    captainAmerica: "ChrisEvans",
    ironMan: "RobertDowneyJr",
    guardiansOfTheGalaxy: "ChrisPratt",
    blackPanther: "ChadwickBoseman"
}
// using function

for (let x in movieAndHero) {
    console.log(`this ${x}`);
}

function sings({captainAmerica}) {
    return `this ${captainAmerica} sings!`; // now it is pulling value
}
console.log(sings(movieAndHero));
*/
///////////////////////////////////////////////////////////////
// recal***
// object - inheritance!
/*
const vehicle = {
    wheels: 4,
    engine: "vroom!"
}

let truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.wheels);
console.log(truck.engine);

let car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "whooosh!";
}

console.log(car.engine());
console.log(car.wheels); // inherited!! by vehicle object***
*/
////////////////////////////////////////////////
// recal 
// delete, hasOwnProperty, for in loop*****
/*
const movieAndHero = {
    captainAmerica: "SteveRogers",
    ironMan: "TonyStark",
    guardiansOfTheGalaxy: "PeterQuil",
    venom: "EddieBrock"
}
// delete any property!!
delete movieAndHero.captainAmerica;
// to check any property!!! hasOwnProperty****
console.log(movieAndHero.hasOwnProperty("captainAmerica"));
//////////////////////////
console.log(Object.keys(movieAndHero));
console.log(Object.values(movieAndHero));
// for in loop!!!
// to console keys only!
for (let x in movieAndHero) {
    console.log(x);
}
// to console values!!
for (let x in movieAndHero) {
    console.log(movieAndHero[x]);
}
*/
////////////////////////////////////////////////////////////////////////////////
// destructuring objects!!!
/*
const capitals = {
    india: "new dehli",
    america: "washington DC",
    uk: "london",
    japan: "tokyo",
}
/*
const {india: myVariable1, america: myVariable2} = capitals;
console.log(myVariable1);
console.log(myVariable2);
console.log(capitals.india);
*/
/*
for (let x in capitals) {
    console.log(capitals[x]);
}*/
////////////////////////////
/*
const capitals = {
    india: "new dehli",
    america: "washington DC",
    uk: "london",
    japan: "tokyo",
}
// destructuring***** using function***
function capital({india}) {
    return`the capital of india is ${india}`;
}
console.log(capital(capitals));
*/
////////////////////////////////////////////









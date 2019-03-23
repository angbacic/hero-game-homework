// Write your JS here

//Declare a variable `hero` and assign it an object
//Hero object should have a name property. The value of name should be a string.
//Hero object should have a heroic property. The value of heroic should be a boolean.
//Hero object should have an inventory property. The value of inventory should be an empty array
//Hero object should have an health property. The value health should be the number 10
//Hero object should have a weapon property. The value of weapon is an object with 
//    a type property which is a string and damage property which is 2

let hero = {
    name: "Name",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "axe",
        damage: 2,
    }
}

let heroObj = {
    name: "Name",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "axe",
        damage: 2,
    }
}

//Game logic functions
//Functions `rest, pickUpItem and equipWeapon` are all defined

function rest(){}
function pickUpItem(){}
function equipWeapon(){}


//Resting
//rest function can be called with object as an argument
//And (re)assigns the health property of that object the value 10
//Returns that same object from the function
//Creates an alert popup with a message, If the health property of that object already has the value 10


function rest(hero) {
    if (hero.health !== 10) {
        hero.health = 10
    } else { alert("your hero is rested, health full") }
    return hero
}

// UI for rest 
// There is a IMG element with the id `inn` ‣
// When clicked will reset the `health` property on the hero global variable to 10

document.getElementById("inn").addEventListener("click", rest(hero));

// Picking up items
// pickUpItem function can be called with a hero-like object as the first argument and a weapon-like object as the second argument
// Adds the weapon-like object as the last element of the inventory array of the hero-like object

let weapon = {
    type: "dagger",
    damage: 2,
}

function pickUpItem(heroObj,weapon) {
    console.log("pickupItem");
    heroObj.inventory.push(weapon);
}

// pickUpItem(heroObj, weapon);

// UI for pickUpItem
// There is a IMG element with the id `dagger` ‣
// When the dagger is clicked it will add a weapon-like object to the inventory array with `type`: `dagger` and `damage`: 2 ‣

document.getElementById("dagger").addEventListener("click", pickUpItem(heroObj, weapon));


console.log(heroObj)
// Equip weapon

// equipWeapon function can be called with a hero-like object as an argument
// And reassigns the `weapon` property to the first element of the inventory array
// If the inventory of the hero-like object is empty, the function should do nothing


function equipWeapon(heroObj) {
    if (heroObj.inventory == 0) {
        console.log("Nothing");
    } else {
        heroObj.weapon = heroObj.inventory[0];
    }
}


// UI for equipWeapon
// There is a IMG element with the id `bag` ‣
// When the bag is clicked it will equip the hero with the first item in the inventory array



document.getElementById("bag").addEventListener("click", equipWeapon(heroObj));

// let heroStats= document.getElementById("heroStats");
// heroStats.textContent;




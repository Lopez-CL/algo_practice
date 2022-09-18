// 12. Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward(to the left) by one index, dropping the first value and leaving a 0(zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(shiftArrayValsLeft([1, 2, 3]));

function d6(min, max) {
    var roll = Math.floor(Math.random() * (max - min + 1) + min);
    return roll;
}

var playerRoll = d6(1, 6);
console.log("The player rolled: " + playerRoll);

// eightball//

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function eightBall(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}


console.log("The eight ball says " + "'" + eightBall(lifesAnswers) + "'");

//pokemon object challenge//

//id divisib;e by 3//
var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

// function pokeSelect(){
//     var community = [];
//     for (var i = 0; i < pokémon.length; i++){
//         if (pokémon[i].id % 3 == 0){
//             community.push(pokémon[i]);
//         }
//     }
//     return community;
// }
// var pokeCall = pokeSelect();
// console.log(pokeCall);

// more than one type

// function pokeSelect(){
//     var community = [];
//     for (var i = 0; i < pokémon.length; i++){
//         if (pokémon[i].types.length >= 2){
//             community.push(pokémon[i]);
//         }
//     }
//     return community;
// }
// var pokeCall = pokeSelect();
// console.log(pokeCall);

//print first type if second is flying//

// function pokeSelect(){
//     var community = [];
//     for (var i = 0; i < pokémon.length; i++){
//         if (pokémon[i].types.includes("flying", 1)){
//             community.push(pokémon[i].types[0]);
//         }
//     }
//     return community;
// }
// var pokeCall = pokeSelect();
// console.log(pokeCall);

//reverse of pokemon names with poison type//

function pokeSelect() {
    var community = [];
    for (var i = 0; i < pokémon.length; i++) {
        if (pokémon[i].types.includes("poison")) {
            community.push(pokémon[i].name);
        }
    }
    community.reverse();
    return community;
}
var pokeCall = pokeSelect();
console.log(pokeCall);

function isPresent2d(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        for (var l = 0; l < arr[i].length; l++) {
            if (arr[i].includes(value)) {
                return true;
            }
        }
    }
    return false;
}
var arrNstd = [[2, 5, 8], [3, 6, 1], [5, 7, 7]];

console.log(isPresent2d(arrNstd, 4));


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for ( var i = 0; i < arr2d.length; i++){
        for (var l = 0; l < arr2d[i].length; l++){
            flat.push(arr2d[i][l]);
        }
    }
    return flat;
}
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


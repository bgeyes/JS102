//Use this file to implement Part One of your project


var animal = {};

animal.username = "barny";

animal['tagline'] = 'Pet me!';

var noises = [];

animal.noises = noises;

console.log(animal);

var count = 0;
for (var key in animal) {
    count += 1;
    if (key === "username") {
        console.log('Hi, my name is ' + animal[key]);
    } else if (key === 'tagline') {
        console.log('I like to say ' + animal[key]);
    }
}

var AnimalTestUser = function(username) {
    
    if (arguments.length > 1) {
        var otherArgs = [];
        for(var i = 1; i < arguments.length; i+=1){
            otherArgs[i] = arguments[i];
        }    
    }
    
    return {
        username: username,
        otherArgs: otherArgs
    }
}

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

function AnimalCreator(username, species, tagline, noises) {
    var noisesArray = [];
    var friends = [];
    for (var i = 0; i < noises.length; i+=1){
        noisesArray[i] = noises[i];
    }
    var animal = {
        username: username,
        species: species,
        tagline: tagline,
        noises: noisesArray,
        friends: friends
    };
    return animal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
var cow = AnimalCreator('Moo', 'cow', 'Moooove!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(cow);
var llama = AnimalCreator('Zeny', 'llama', 'Ziieege', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(llama);      

var addFriend = function(firstAnimal, secondAnimal) {
    firstAnimal.friends.push(secondAnimal.username);
    return firstAnimal;
}

addFriend(sheep, cow);
console.log(sheep);
addFriend(sheep, llama);
console.log(sheep);
addFriend(cow, sheep);
console.log(cow);
addFriend(cow, llama);
console.log(cow);
addFriend(llama, cow);
console.log(llama);
addFriend(llama, sheep);
console.log(llama);

var myFarm = [];
myFarm.push(sheep, cow, llama);
console.log(myFarm);

var addMatchesArray = function(array) {
    
    for(var i = 0; i < array.length; i+=1) {
        array[i].matches = [];
    }
    return array;
}

addMatchesArray(myFarm); 
console.log(myFarm[0]);

var giveMatches = function(mArray) {
    for(var i = 0; i < mArray.length; i+=1) {
        mArray[i].matches.push(mArray[i].friends[0]);
    }
    return mArray;
}

giveMatches(myFarm); 
console.log(myFarm[0]);
console.log(myFarm[1]);
console.log(myFarm[2]);

var friendsUsernames = [];
var friends = [];

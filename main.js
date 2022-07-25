const prompt = require('prompt-sync')({sigint: true});
///////////////////Variables/////////////////////////////////////
// let userPrompt = prompt('Enter a string: ');
// console.log(`User string: ${userPrompt}`)
/*
fish {
    name:str
    weight : num 
    value: num
}

descriptived words: 2 descriptors and 1 fish type --
2 arrays of descriptors
1 array of fish types

fishCaught.length = totalLength
variable for total value
variable for total pounds
counter keep track of time
while/for loop to keep track of time while less than 7hrs
*/
let firstDescription = ["Purple", "Red", "Blue", "Yellow", "Slimy", "Deep-sea", "Grey", "Scaly", "Shiny", "Freshwater" ];
let secondDescription = ["Juicy", "Smelly", "Foul-smelling", "Beautiful", 'Salty', "Bright", "Finned", "Bigmouthed", "Bottom-dwelling", "Oily"];
let fishType = ['Tilapia', "Salmon", "Catfish", "Carp", "Tuna", "Swordfish", "Bass", "Trout", "Cod", "Herring"];
let fishCaught = [];
let time = 6;
let weightCount = [];
let valueCount = [];
let sumA = 0
let sumB = 0
let userInput = "";
/////////////// fish name /////////////////
function fishName1(name){
    let fishName = "";
    let y = Math.floor((Math.random()*9)+1);
    let x = Math.floor((Math.random()*9)+1)
    let z = Math.floor((Math.random()*9)+1)

    fishName += `${firstDescription[x]} ${secondDescription[y]} ${fishType[z]}`
    return fishName
} 

///////////////// fish weight/value /////////////////

function randomWeight(weight){
    let randomWeight = Math.ceil(Math.random()*1000)/100;
    return Number(randomWeight).toFixed(2);
}
//let randomWeight = Math.ceil(Math.random()*1000)/100;


////////////////Game Play://///////////////////////////

console.log('\nYou\'ve gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.')
console.log("\n==========================================\n")

console.log(`The time is ${time}:00am. So far you've caught: ${fishCaught.length} fish, ${sumA} lbs, $${sumB}.00.`)

for (let i = 0; i < 6; i++){
    let newFish = {
        name: fishName1(),
        weight: randomWeight(),
        value: randomWeight(),
    };
    let exceed = 10 - sumA;
    console.log(`\nYou caught a '${newFish.name}' weighing ${newFish.weight} lbs with a value of $${newFish.value}!`)
    if (newFish.weight <= exceed){
    console.log("\nYour action: [c]atch or [r]ealease?")
    userInput = prompt("> ")}
    
    if (userInput === 'c' && newFish.weight <= exceed){
    console.log("You chose to keep the fish.") 
       fishCaught.push(newFish.name);
       //console.log(fishCaught)
       weightCount.push(Number(newFish.weight));
       //console.log(10 - sumA)
       valueCount.push(Number(newFish.value));
       time ++;
    if (fishCaught.length <= 1){
            sumA = weightCount[0];
            sumB = valueCount[0];
            } else if (fishCaught.length > 1){
            sumA += weightCount[weightCount.length-1] 
            //console.log(sumA)
            sumB += valueCount[valueCount.length-1]
            }
        }
        else if (userInput === 'r'){
        console.log("You chose to release the fish.")
        time++;
    }
     if (newFish.weight >= exceed){ 
        console.log('This fish would put you over 10 lbs, so you release it.');
        console.log('\nPress [enter] to continue.')
        userInput = prompt("> ");
        time++;
    } 
    if (i === 5){
        console.log("\n==========================================\n")
        console.log("The time is 12:00pm. Times up!")
        //console.log(fishCaught)
        console.log(`\nYou caught ${fishCaught.length} fish:\n`)
        for(let i = 0; i < fishCaught.length; i++){
        //console.log(`\nYou caught ${fishCaught.length} fish:\n`)
        console.log(`* ${fishCaught[i]}, ${weightCount[i]} lbs, $${valueCount[i]}\n`);}
        //console.log(sumA)
        console.log(`
        Total weight: ${sumA.toFixed(2)} lbs
        Total value: $${sumB.toFixed(2)}`)
    } else if (i < 5) {
    console.log("\n==========================================\n")
    console.log(`The time is ${time}:00am. So far you've caught: ${fishCaught.length} fish, ${sumA.toFixed(2)} lbs, $${sumB.toFixed(2)}.
    `)
    // console.log(`You caught a '${fnewFish.name}' weighing ${randomWeight(newFish.weight)} lbs with a value of $${randomWeight(newFish.value)}!`)
}

}

// add if userInput doesnt = c or r or enter
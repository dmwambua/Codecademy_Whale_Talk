/*Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
*/

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//Loop to iterate through each letter of the input
for (let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    //inner loop to iterate through the vowels array
    for (let j = 0; j < vowels.length; j++) {
        //log the iterator number positions inside the inner for loop
        //console.log(j){
        if (input[i] === vowels[j]) {
            // Log the matching letter
            //console.log(input[i])
            resultArray.push(input[i])

        if (input[i] === 'e' || input[i] === 'u'){
            resultArray.push(input[i]);
        }
        break; // Exit inner loop once a match is found
        }
    }
}
console.log(resultArray);
let resultString =resultArray.join('');
console.log(`Here is how a whale would say "turpentine and turtles" ${resultString.toUpperCase()}`);
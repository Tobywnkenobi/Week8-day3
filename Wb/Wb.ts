// # How to solve a problem:

// #     -Figure out wher the input and its type are
// #     -Set up a function
// #     -Figure out what the output and its type are
// #     -Gather your Knowledge
// #     -Gathers your constraints (Not Always Necessary)
// #     -Determine a Logical way to solve the problem
// #      -Write each step out in English
// #       -Write each step out in Python-esse (sudo-code)
// #       -Invoke and Test your function
/* 
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

solution:

- create an array to count the number of occurences
- iterate over dice array and increment the count
- initialize score @ 0
- iterate over counts array.
        calculate triplets score first (subtract teh triplet count)
        add score for remaining 1s and 5s
- return the final score
*/

function diceScore(dice: number[]): number {
    // count dice occurences
    const counts = [0, 0, 0, 0, 0, 0];
    for (const die of dice) {
        counts[die - 1]++;
    }

// score
    let score = 0;
    for (let i =0; i < counts.length; i++) {
        const count = counts[i];
        if (count >=3) {
            score += (i + 1 === 1) ? 1000 : (i + 1) * 100;
            counts[i] -= 3;
        }
    }
    score += counts[0] * 100 + counts[4] * 50;

    return score;
}


console.log(diceScore([5, 1, 3, 4, 1]));
console.log(diceScore([1, 1, 1, 3, 1]));
console.log(diceScore([2, 4, 4, 5, 4]));
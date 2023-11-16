/* Write your code below. Good luck! 🙂 */

const calcAverage = (first, second, third) => {
    let sum = 0;
    
    sum += first;
    sum += second;
    sum += third;
    
    return sum / 3;
}


function checkWinner(avgDolphins, avgKoalas)
{
    if (avgDolphins > avgKoalas)
        console.log("Dolhpins win");
    else if (avgDolphins > avgKoalas)
        console.log("Koalas win");
    else
        console.log("No team wins...");
}

let scoreDolphins =[44,23,71]
let scoreKoalas = [65, 54, 49]

checkWinner(calcAverage(scoreDolphins[0], scoreDolphins[1], scoreDolphins[2]), calcAverage(scoreKoalas[0], scoreKoalas[1], scoreKoalas[2]))

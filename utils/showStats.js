export function showStats(player){
    let sum = 0
    for(let num of player["times"]){
        sum+=num
    }
console.log("The sum of the time for all the puzzles:", sum);
console.log("The average for each puzzle is:", sum/player["times"].length);

}
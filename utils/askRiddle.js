import input from "analiza-sync";

export function askRiddle(riddleObj){
    console.log(riddleObj["name"])
    let i = false
    while (i === false){ 
        console.log(riddleObj["taskDescription"]);
        let ask_to_player = input("Your answer:")
        if(ask_to_player === riddleObj["correctAnswer"]){
            i = true}
        }
       
}

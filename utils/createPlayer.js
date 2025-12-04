import { isNonEmptyString } from "./isNonEmptyString.js";
export function createPlayer(name){
    if(isNonEmptyString(name) === true){
        return {"name":name, "times":[]}
    }
}






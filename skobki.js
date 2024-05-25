let s = prompt("Enter ur string")

function isgood(s) {
    let stack = []
    for (a of s) {
        if (a == "(") {
            stack.push("1")
        } else if (stack.length != 0){
            stack.pop("1")
        } else {
            return false
        }
    }
    return stack.length == 0
}

alert (isgood(s)?"Pravilnaya":"Nyepravilnaya")
let body = document.body.childElementCount;
console.log(body)

let trueOrFalse = (argument) => {
    if(body >= 5){
        return true;
    }
    return false;
}

let NodeList = document.querySelectorAll('p');

console.log(NodeList);
console.log(trueOrFalse(body));
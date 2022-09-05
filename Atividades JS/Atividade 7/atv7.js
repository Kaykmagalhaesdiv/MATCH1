let receiveUser= prompt('Digite os nomes dos pilotos separados por vírgula EX: (piloto1,piloto2 ...) de acordo com a ordem de chegada.')
 receiveUser = receiveUser.split(',')
 for(let counter = 1; counter < receiveUser.length; counter++){
    if(counter>3){
        console.log(` ${counter} - ${receiveUser[counter]}`)
    } else{
        console.log(`Pódio - ${counter} - ${receiveUser[counter]}`)
    }
 }
 
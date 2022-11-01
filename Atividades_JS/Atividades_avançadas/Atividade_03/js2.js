try {
    let boolean  = false;
    if(boolean){
        console.log("Iniciando processo")
    }else{
        throw new Error('Quebrou o codigo')
    }
} catch (error) {
    console.error(error)
}
finally{
    console.log('Fim do processo')
}
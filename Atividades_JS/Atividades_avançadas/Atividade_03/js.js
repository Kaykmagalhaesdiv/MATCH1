
try {
    let message = ''
    try {

        try {
            if(message == ''){
                throw new Error('Mensagem vazia!')
            }
        } catch (error) {
            console.log(error)
            throw error
        }
        
    } catch (error) {
        console.log(error);
        throw error;
    }
} catch (error) {
    console.error(error)
}
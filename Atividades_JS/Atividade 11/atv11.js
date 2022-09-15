
  let receiveUser = prompt("Digite seu CPF");
    function validaNumero(cpfFormatado){
      if(!isNaN(receiveUser)){
        return true;
      }
      return alert("Digite Apenas numeros!");
    };

    function validaLength(cpfFormatado){
      if(receiveUser.length > 11| receiveUser.length < 11 ){
        return alert("Digite apenas 11 números e sem Caracteres(. ou -)");
      }
      return true;
    }
  const cpfFormatado = receiveUser.replace(/^(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
   function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
      return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
  })


alert(cpfFormatado)
validaNumero()
validaLength()

  

  

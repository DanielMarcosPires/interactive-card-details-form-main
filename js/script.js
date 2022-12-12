const send = document.querySelector('#send')

const formatCardNumber = (cardNumber) => {
    let finalCardNumber = "";
    let groupLen = 4;
    let totalTimes = cardNumber.length / groupLen;
    
    for (let idx = 0; idx < totalTimes; idx++) {
        finalCardNumber += cardNumber.slice(totalTimes, totalTimes+groupLen) + " ";        
    }

    return finalCardNumber.slice(0, -1);
};

send.addEventListener("click",()=>{
   const manutencao = document.querySelectorAll(".Informacao");
   let dados = document.querySelectorAll(".Informacao")
   for(let i = 0; i < 5 ; i++){
      const cartao={
         nome:()=>{
            const nome = document.querySelector('.proprietario');
            nome.innerHTML = manutencao[0].value;
         },
         numero:()=>{
          const numeroDocartao = document.querySelector('.idCartao');
          
         

          const valor = manutencao[1].value
         
          numeroDocartao.innerHTML = formatCardNumber(valor);
         },
         dataDevencimento:()=>{
            const vencimento = document.querySelector('.vencimento');
            vencimento.innerHTML = manutencao[2].value;
         },
         cvc:()=>{
            const cvc = document.querySelector('.cvc');
            cvc.innerHTML = manutencao[3].value
         },
      }
      
      if(manutencao[0].value != '' && manutencao[1].value != '' && manutencao[2].value != '' &&manutencao[3].value != ''){
        cartao.nome()
        cartao.numero()
        cartao.dataDevencimento()
        cartao.cvc()
        break;
      }else{
         alert('Preencha todo o formulário')
         break;
      }
   }
})
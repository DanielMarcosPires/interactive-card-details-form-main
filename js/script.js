const send = document.querySelector('#send')

//-------------------------------------------
//-------------------------------------------
send.addEventListener("click",()=>{
   const manutencao = document.querySelectorAll(".Informacao");
   let dados = document.querySelectorAll(".Informacao")
   for(let i = 0; i < 5 ; i++){
      const cartao={
         nome:()=>{
            const nome = document.querySelector('.proprietario')
            nome.innerHTML = manutencao[0].value;
         },
         numero:()=>{
          const numeroDocartao = document.querySelector('.idCartao')
          numeroDocartao.innerHTML = manutencao[1].value;
         },
         dataDevencimento:()=>{
            const vencimento = document.querySelector('.vencimento')
            vencimento.innerHTML = manutencao[2].value;
         },
         cvc:()=>{
            const cvc = document.querySelector('.cvc')
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
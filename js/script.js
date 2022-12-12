const send = document.querySelector('#send')

send.addEventListener("click",()=>{
   let dados = document.querySelectorAll(".Informacao")
   for(let i = 0; i < 5 ; i++){
      let manutencao = document.querySelectorAll(".Informacao");
      const caracter = manutencao[i].value
      console.log(caracter)
      
      let numeroDocartao = document.querySelector('.idCartao')  
      let nome = document.querySelector('.proprietario')
      let vencimento = document.querySelector('.vencimento')
      let cvc = document.querySelector('.cvc')


      numeroDocartao.innerHTML = manutencao[1].value
      nome.innerHTML = manutencao[0].value
      vencimento.innerHTML = manutencao[3].value
      cvc.innerHTML = manutencao[4].value

   }
})
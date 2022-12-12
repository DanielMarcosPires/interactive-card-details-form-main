const send = document.querySelector('#send')

send.addEventListener("click",()=>{
   const preenchido = document.querySelectorAll(".nomeInformacao");
   const substituo = document.querySelector('.formulario')
   const valor = preenchido.values().next().value
   console.log(valor)

  
   
})
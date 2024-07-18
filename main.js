const form =  document.querySelector('form');
const resultado = document.getElementById('resultado_da_operacao');
const mensagemRuim = document.getElementById('mensagem_ruim');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');

form.addEventListener('submit',function(enviar){
    enviar.preventDefault();
    formularioValido();
})

campoA.addEventListener('keyup',(e)=>{
    mensagemRetorno();
})

campoB.addEventListener('keyup',(e)=>{
    mensagemRetorno();
})

 function formularioValido(){ 
      if(campoA.value != "" && campoB.value != ""){
       if( campoA.value < campoB.value){
        campoA.value =""
        campoB.value = ""
       }
    }
  }
    function mensagemRetorno(){
       if( campoA.value < campoB.value){
           resultado.style.display ="block";
           mensagemRuim.style.display="none";
       }
       else if(campoA.value === "" || campoB.value===""){
          mensagemRuim.style.display="none";
          resultado.style.display ="none";
       }
       else{
           resultado.style.display ="none";
           mensagemRuim.style.display="block";
       }
    }
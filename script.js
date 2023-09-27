//const btnSalvarLocalmente = document.getElementById('salvarLocalmente');
//btnSalvarLocalmente.addEventListener('click', salvarTextoLocalmente);

//function salvarTextoLocalmente() {
    //pega o valor do campo de entrada de texto
    //const variavelSalva = document.getElementById('inputTexto').value;

    //salva o texto no local storage com uma chave especifica
    //localStorage.setItem('textoSalvo', variavelSalva);

    //exite uma mensagem de sucesso
    //alert(`Texto "${variavelSalva}" salvo localmente com sucesso!`);

    //limpa o campo de entrada de texto
   //document.getElementById('inputTexto').value = '';
//}

const btCorFundo = document.getElementById('corFundo');
btCorFundo.addEventListener('click', mudaCorFundo);

function mudaCorFundo() {
    const cor = localStorage.getItem('corFundo');

    if(cor == null){
        localStorage.setItem('corFundo', "dark");
        document.style.background=black;
        
    }else if(cor == "dark"){
        localStorage.setItem('corFundo', "light");
        document.style.background = white;
        
    }else{
        localStorage.setItem('corFundo', "dark");
        document.style.background = black;
    }
}

window.addEventListener('load', contaVisitas);

function contaVisitas() {
    var visita = localStorage.getItem('visitas');
    console.log("Visita: ", visita);

    if(visita == null){

        localStorage.setItem('visitas', +1);
        //document.getElementById('contadorVisitas').innerHTML = visita;
    }else{
       var visita = +visita + 1;
        localStorage.setItem('visitas', visita);
        console.log("Visita: ", visita);
        //document.getElementById('contadorVisitas').innerHTML = visita;
    }
}

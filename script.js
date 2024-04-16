

/*CRIANDO SLIDESHOW AUTOMÁTICO */
//DECLARANDO AS VARIAVEIS

let imagens =['img/Carro1.jpg','img/Carro2.jpg','img/Carro3.jpg'];
let index =0;
let time =3000;

function slideShow(){
    document.getElementById('img-car').src=imagens[index];
    index++;

        if(index == imagens.length){
          index =0;
        }
        setTimeout('slideShow()',time);
}
slideShow();

//VALIDAÇÃO DE LOGIN

function validar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario ==="Admin" && senha ==="12345"){
        window.open('dashboard.html');

    }else{
        window.close('login.html');
        alert("usuario ou senha inválidos")
    }
}
//Criando o Menu

let btnMobile = document.querySelector('#btnMobile');

function toggleMenu(){
    let navBar = document.querySelector('#menu-nav');
    navBar.classList.toggle("active")
}
btnMobile.addEventListener("click", toggleMenu)
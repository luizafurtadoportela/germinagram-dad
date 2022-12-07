"use strict";

// previne carregamento da pagina
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
});

// QUANDO EU CLICAR NO BOTÃO + APARECE O MODAL
const cta_mais = document.querySelector(".postadd");
cta_mais.onclick = aparece_modal;

function aparece_modal() {
  const modal = document.querySelector(".post-modal");
  modal.style.display = "flex";
}

// QUANDO EU CLICAR FORA DO MODAL ELE É FECHADO
const fora = document.querySelector(".post-modal");

function sair_modal() {
  console.log("FUNÇÃO SAIR MODAL");
  fora.style.display = "none";
}

// CAPTURAR CONTEÚDO DO INPUT
const comentario = document.querySelector("textarea");
comentario.value;

// CAPTURAR CONTEÚDO DA IMAGEM
const input = document.querySelector("#campo-foto");

let biblicoteca = "";
// CHANGE = QUANDO O USUÁRIO COLOCA UMA IMAGEM
input.addEventListener("change", function (event) {
  const tgt = event.target
  biblicoteca = new FileReader(); 
  const files = tgt.files;

  biblicoteca.onload = function pegarImg() {
    document.querySelector("#preview-img").src = biblicoteca.result;
  };

  biblicoteca.readAsDataURL(files[0]);
});

//FAZER UM POST
// QUANDO CLICAR EM POSTAR
const postar = document.querySelector(".postar");
let secaoPost = document.querySelector(".secao-posts");
const primeiroNome = document.querySelector("#firstname");

function funpostar() {
  secaoPost.innerHTML += `
  <article class="post">
          <div class="post-info">
            <div class="usuario-info">
              <div class="avatar"></div>
              <div class="nome-hora">
                <p class="nome">Joana da Silva Peixoto</p>
                <p class="hora">00 horas atrás</p>
              </div>
            </div>
            <p class="comentario">
              ${comentario.value}
            </p>
          </div>
          <img class="post-imagem" src="${biblicoteca.result}" alt="" />
          <div class="post-interacoes">
            <div class="container-like" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#888" class="w-6 h-6" id="like" width="25px" id="like-img">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"/>
          </svg>
              <p class="descricao-like" id="curtir">Curtir</p>
            </div>
            <div class="container-coment">
              <img class="coment-btn" src="comentario.svg" alt="like"/>
              <p class="descricao-comentario">Comentários</p>
            </div>
          </div>
        </article>
`;
  console.log("Estou dentro da funpostar!!!!");
  const like = document.querySelector("#like-img")
  like.addEventListener("click", likeAzul())
  const Curtir = document.querySelector("#curtir")
}

// FUNÇÃO PARA MUDAR A COR DO LIKE


function likeAzul(e) {
  console.log("LIKEEEEE");

  e.target.style.cssText = "fill: rgb(66, 66, 255);" +
  "stroke: transparent;"

  Curtir.style.cssText = "color: rgb(66, 66, 255);" +
  "font-weight: 600;"
  
}




//

// console.log(comentario);

// const arquivo = document.querySelector("#campo-foto");
// console.log(arquivo);

// MUDAR A COR DO LIKE (VOU TER QUE TROCAR A IMG)
// const like = document.querySelector(".container-like")
// like.onclick = mudaCor()

// function mudaCor() {
//
// }











// MODAL CADASTRO

//CRIAR UMA CONST PARA CADA INFORMAÇÃO
const nomeCompleto = document.querySelector("#nomeCompleto");
const username = document.querySelector("#Username");
const email = document.querySelector("#email");
const celular = document.querySelector("#number");
const senha = document.querySelector("#password");
const confirmaSenha = document.querySelector("#confirmPassword");
const genero = document.querySelector('input[name="gender"]:checked');
const ctaEntrar = document.querySelector("#ctaEntrar");

function AbrirModalCadastro() {
  // FECHAR CADASTRO CASO ESTEJA ABERTO
  if (Login.style.display == "flex") {
    Login.style.display = "none";
  }

  // ABRIR LOGIN CASO ESTEJA FECHADO E FECHAR CASO ESTEJA ABERTO
  if (Cadastro.style.display == "none") {
    Cadastro.style.display = "flex";
  } else {
    Cadastro.style.display = "none";
  }
}










// MODAL LOGIN

const login_username = document.querySelector("#username").value;
const login_email = document.querySelector("#email").value;
const login_senha = document.querySelector("#password").value;
const login_confSenha = document.querySelector("#confirmPassword").value;
const fotoPerfil = document.querySelector("#fotoPerfil").value;
const fazerLogin = document.querySelector(".login").value;

function AbrirModalLogin() {
  // FECHAR CADASTRO CASO ESTEJA ABERTO
  if (Cadastro.style.display == "flex") {
    Cadastro.style.display = "none";
  }

  // ABRIR LOGIN CASO ESTEJA FECHADO E FECHAR CASO ESTEJA ABERTO
  if (Login.style.display == "none") {
    Login.style.display = "flex";
  } else {
    Login.style.display = "none";
  }
}




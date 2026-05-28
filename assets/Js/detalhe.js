import { dados_das_noticias } from "./Bd";

const container_das_noticias = document.getElementById("container_detalhe");

const Params = new URLSearchParams(window.location.search);
const id = parseInt(Params.get("id"));

const noticia = dados_das_noticias.find((noticia) => noticia.id === id);

if (noticia) {
    container_das_noticias.innerHTML = `
    <h1 class="titulo-da-noticia">${noticia.titulo}</h1>
    <p><strong>${noticia.categoria} </strong> - ${noticia.data}</p>
    <p><em>Por ${noticia.autor}</em></p>
    <img src="${noticia.imagem}" alt="${noticia.titulo}" class="painel-img">
    <p class="descricao-da-noticia">${noticia.descricao}</p>
    <p>${noticia.conteudo}</p>
    <p><a href="index.html">Voltar para a página inicial</a></p>
    `;
}else{
    container_das_noticias.innerHTML = `<h1>Error 404, noticia não encontrada</h1>`;
}
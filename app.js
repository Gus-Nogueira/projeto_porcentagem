let inputValorX = document.getElementById("valorX");
let inputPorcentagem = document.getElementById("porcentagem");
let resultado = document.getElementById("resultado");

function calcular(){
    let valorDeX = inputValorX.value;
    let porcentagem = inputPorcentagem.value;

    let valorFinal = porcentagem / 100 * valorDeX;

    resultado.innerHTML = `<p>${valorFinal} é ${porcentagem}% de ${valorDeX}</p>`
}
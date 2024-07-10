
function calcularPontuacao() {

    var select1 = document.getElementById("selectMenu1")
    var select2 = document.getElementById("selectMenu2");
    var select3 = document.getElementById("selectMenu3");


    var valorSelect1 = parseInt(select1.value);
    var valorSelect2 = parseInt(select2.value);
    var valorSelect3 = parseInt(select3.value);


    var pontuacaoTotal = valorSelect1 + valorSelect2 + valorSelect3;


    var resultado = document.querySelector(".pontuacao");
    resultado.textContent = "Pontuação: " + pontuacaoTotal;
}


document.getElementById("selectMenu1").addEventListener("change", calcularPontuacao);
document.getElementById("selectMenu2").addEventListener("change", calcularPontuacao);
document.getElementById("selectMenu3").addEventListener("change", calcularPontuacao);

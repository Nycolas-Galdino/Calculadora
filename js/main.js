document.addEventListener('keypress', teclado);
document.addEventListener('input', testarTema, false)

var newSearch = false

const menuAberto = document.getElementById("menu-aberto")
const menuFechado = document.getElementById("menu-fechado")

function lerTema() {

    let lStorage = JSON.stringify(localStorage.getItem("tema-site"))

    if (lStorage == null) { return }

    let temaLido = JSON.parse(localStorage["tema-site"])

    document.body.style.setProperty('--fundo', temaLido['corFundo']);
    document.body.style.setProperty('--fundo-dos-botoes', temaLido['corBotoes']);
    document.body.style.setProperty('--fundo-calculadora-historico', temaLido['corCalculadora']);
    if (temaLido['corBotoes'] == "#000000") { document.body.style.setProperty("--cor-dos-números-botoes", "#FFFFFF") }

    document.getElementById("cor-do-fundo").value = temaLido['corFundo'];
    document.getElementById("cor-calculadora-historico").value = temaLido['corCalculadora']
    document.getElementById("cor-dos-botoes").value = temaLido['corBotoes']


}


function testarTema() {
    let inCorDoFundo = document.getElementById("cor-do-fundo").value
    let inCorDaCalculadora = document.getElementById("cor-calculadora-historico").value
    let inCorDosBotoes = document.getElementById("cor-dos-botoes").value

    document.body.style.setProperty('--fundo', inCorDoFundo );
    document.body.style.setProperty('--fundo-dos-botoes', inCorDosBotoes);
    document.body.style.setProperty('--fundo-calculadora-historico', inCorDaCalculadora);
    if (inCorDosBotoes == "#000000") { document.body.style.setProperty("--cor-dos-números-botoes", "#FFFFFF") }
}

function salvarTema() {
    let inCorDoFundo = document.getElementById("cor-do-fundo").value
    let inCorDaCalculadora = document.getElementById("cor-calculadora-historico").value
    let inCorDosBotoes = document.getElementById("cor-dos-botoes").value
    
    let lStorage = JSON.stringify(localStorage.getItem("tema-site"))

    if (lStorage == null) {
        localStorage.setItem("tema-site", "[]")
        lStorage = []
    }

    const dados = {
        corFundo: inCorDoFundo,
        corCalculadora: inCorDaCalculadora,
        corBotoes: inCorDosBotoes
    }


    localStorage.setItem("tema-site", JSON.stringify(dados))
    alert("Tema salvo com sucesso!")

}

function abrirMenu() {
    /* Executa a animação de abrir o menu */
    menuAberto.style.animation = "menu-animation 2s"
    menuAberto.style.display = "block";
    menuFechado.style.display = "none";

    /* Aguarda acabar animação e retira a mesma da div*/
    setTimeout(() => {
        menuAberto.style.animation = ""
    }, 2000);
};

function fecharMenu() {
    /* Executa a animação de fechar o menu */
    menuAberto.style.animation = "menu-animation 2s"
    menuAberto.style.animationDirection = "reverse"

    /* Aguarda a animação acabar */
    setTimeout(() => {
        menuFechado.style.display = "block";
        menuAberto.style.display = "none";
    }, 1900);

};

function result() {
    if (document.getElementById("btnOnOff").innerHTML == "Off") { return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.") }

    /* Pega o resultado do site, e tenta calcular ele, caso contrário, retorna um alerta de erro */
    let resultado = document.getElementById("resultado").value
    try {
        document.getElementById("resultado").value = eval(resultado)

        let hist = document.getElementById("listaHistorico").innerHTML

        hist = `${hist} <li> ${resultado} = ${eval(resultado)} </li>`;

        document.getElementById('listaHistorico').innerHTML = hist

        document.getElementById("listaHistorico").scrollTo(0, document.getElementById("listaHistorico").scrollHeight)
        newSearch = true
    } catch (error) {
        return alert("Operação sem semântica")
    }
};

/* Retorna o número dentro da área de cálculo */
function getBtn(btn) {
    if (document.getElementById("btnOnOff").innerHTML == "Off") { return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.") }

    if (newSearch == true & "1234567890".indexOf(btn) > -1) { clean() }

    newSearch = false
    let resultado = document.getElementById("resultado")
    let texto = document.getElementById("resultado").value

    if (texto.length > 15) { return alert("Máximo de 15 caracteres atingido") }

    resultado.value = texto + btn
};

/* Limpa a área de cálculo */
function clean() {
    document.getElementById("resultado").value = ""
};

/* Liga/Desliga a calculadora */
function OnOff() {
    if (document.getElementById("btnOnOff").innerHTML == "Off") {
        document.getElementById("btnOnOff").innerHTML = "On"
        document.getElementById("btnOnOff").style.backgroundColor = "rgb(144, 238, 144)"
    }

    else if (document.getElementById("btnOnOff").innerHTML == "On") {
        document.getElementById("btnOnOff").innerHTML = "Off"
        document.getElementById("btnOnOff").style.backgroundColor = "rgb(240, 128, 128)"
        document.getElementById("listaHistorico").innerHTML = ""
        clean()
    }
};

/* Verifica qual botão foi apertado e como deve proceder com a ação. */
function teclado(event) {
    var key = event.keyCode || event.which;
    let keypressed = String.fromCodePoint(key);

    if (keypressed.toUpperCase() == "O") {
        return OnOff()
    }


    if (document.getElementById("btnOnOff").innerHTML == "Off") {
        clean()
        return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.");
    }

    if (event.key == "Enter") {
        if (document.getElementById("resultado").value == "") {
            return alert("A conta está vazia.")
        };
        return result()
    }

    if (keypressed.toUpperCase() == "C") {
        return clean()
    }

    if ("1234567890.-*/()x".indexOf(keypressed) > -1 || keypressed == "+") {
        return getBtn(keypressed)
    }

    else (alert("Botão não aceito pela calculadora"))
}
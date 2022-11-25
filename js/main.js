document.addEventListener('keypress', teclado);
var newSearch = false


const menuAberto = document.getElementById("menu-aberto")
const menuFechado = document.getElementById("menu-fechado")

function abrirMenu() {
    menuAberto.style.animation = "menu-animation 2s"
    menuAberto.style.display = "block";
    menuFechado.style.display = "none";

    setTimeout(() => {
    menuAberto.style.animation = ""
    }, 2000);
};

function fecharMenu() {
    menuAberto.style.animation = "menu-animation 2s"
    menuAberto.style.animationDirection = "reverse"
    

    setTimeout(() => {
        menuFechado.style.display = "block";
        menuAberto.style.display = "none";
        console.log('Menu fechado com sucesso!')
    }, 1900);

};

function result() {
    if (document.getElementById("btnOnOff").innerHTML == "Off") { return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.") }

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

function getBtn(btn) {
    if (newSearch == true & "1234567890".indexOf(btn) > -1) { clean() }

    newSearch = false
    let resultado = document.getElementById("resultado")
    let texto = document.getElementById("resultado").value

    if (texto.length > 15) { return alert("Máximo de 15 caracteres atingido") }

    resultado.value = texto + btn
};

function clean() {
    document.getElementById("resultado").value = ""
};

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
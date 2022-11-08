document.addEventListener('keypress',teclado)

function result(num){
    if (document.getElementById("btnOnOff").innerHTML == "Off"){ return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.")}

    let resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = eval(resultado)
};

function getBtn(btn){
    if (document.getElementById("btnOnOff").innerHTML == "Off"){ return alert("A calculadora está desligada \n Pressione 'o' para ligar a mesma.")}

    let resultado = document.getElementById("resultado")
    let texto = document.getElementById("resultado").innerHTML
    resultado.innerHTML = texto + btn
};

function clean(){
        document.getElementById("resultado").innerHTML = ""
};

function OnOff(){
    if (document.getElementById("btnOnOff").innerHTML == "Off"){
        document.getElementById("btnOnOff").innerHTML = "On"
        document.getElementById("btnOnOff").style.backgroundColor = "rgb(144, 238, 144)"
    }

    else if (document.getElementById("btnOnOff").innerHTML == "On"){
        document.getElementById("btnOnOff").innerHTML = "Off"
        document.getElementById("btnOnOff").style.backgroundColor = "rgb(240, 128, 128)"
        clean()
    }
};

function teclado(event){
    var key = event.keyCode || event.which;
    let keypressed = String.fromCodePoint(key); 

        console.log(keypressed)
    if (keypressed.toUpperCase() == "O") {
        return OnOff()
    }

    if (event.key == "Enter") {
        return result()
    }

    if ("1234567890.-*/()x".indexOf(keypressed) > -1 || keypressed == "+"){
        console.log('ok')
        return getBtn(keypressed)
    }
    
    else (alert("Botão não aceito pela calculadora"))
}
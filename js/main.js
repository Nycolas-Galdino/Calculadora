function result(num){
    if (document.getElementById("btnOnOff").innerHTML == "Off"){ return alert("A calculadora está desligada")}

    let resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = eval(resultado)
};

function getBtn(btn){
    if (document.getElementById("btnOnOff").innerHTML == "Off"){ return alert("A calculadora está desligada")}

    let resultado = document.getElementById("resultado")
    let texto = document.getElementById("resultado").innerHTML
    resultado.innerHTML = texto + btn
};

function clean(){
        document.getElementById("resultado").innerHTML = ""
        console.log("limpo")
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

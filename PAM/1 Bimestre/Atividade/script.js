var alerta = 0

function calcularIMC(){
    let peso = document.getElementById("peso").value 
    let altura = document.getElementById("altura").value
    let imc = peso / (altura * altura)

    if(peso == "" || altura == ""){
        alert("Insira os valores necessários")
        alerta++
    }

    else{
        imc = imc.toFixed(2)

    document.getElementById("IMC").innerHTML = imc
    }
}

function verificarClassificacao(){
    let imc = document.getElementById("IMC").innerHTML
    if(imc < 18.5){
        document.getElementById("Classificacao").innerHTML = "Magreza"
        document.getElementById("Grau").innerHTML = "0"
    }

    if(imc >= 18.5 && imc < 25){
        document.getElementById("Classificacao").innerHTML = "Normal"
        document.getElementById("Grau").innerHTML = "0"
    }

    if(imc >= 25.0 && imc < 30){
        document.getElementById("Classificacao").innerHTML = "Sobrepeso"
        document.getElementById("Grau").innerHTML = "I"
    }

    if(imc >= 30.0 && imc < 40){
        document.getElementById("Classificacao").innerHTML = "Obesidade"
        document.getElementById("Grau").innerHTML = "II"
    }

    if(imc > 40.0){
        document.getElementById("Classificacao").innerHTML = "Obesidade grave"
        document.getElementById("Grau").innerHTML = "III"
    }
}

function toggle(){
    if(alerta > 0){
        alerta = 0
        let tabela = document.getElementById("tabela")
        
        tabela.classList.remove("mostrar")
    }
    else{

        let tabela = document.getElementById("tabela")
        
        tabela.classList.add("mostrar")
    }
}

function resetarCampos(){
    let peso = document.getElementById("peso")
    let altura = document.getElementById("altura") 

    peso.value = ""
    altura.value = ""

    let tabela = document.getElementById("tabela")
    
    tabela.classList.remove("mostrar")
}
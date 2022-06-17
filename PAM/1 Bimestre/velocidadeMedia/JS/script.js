
const txtespaco = document.getElementById("txtespaco")
const txttempo = document.getElementById("txttempo")
const btncalcular = document.getElementById("btncalcular")
const txtvm = document.getElementById("txtvm")

btncalcular.addEventListener("click", calcular)

function calcular(){

    let res = txtespaco.value/txttempo.value
    res = res.toFixed(2)
    document.getElementById("txtvm").value = res

    if(res >120){
        txtvm.style.backgroundColor ="red"
        txtvm.style.color ="white"

    }

    else{
        txtvm.style.backgroundColor ="green"
        txtvm.style.color ="black"


    }

}

/*

mouseenter executa quado o pornteiro do mouse entra no elemento
mouseleave executa quado o pornteiro do mouse sai do elemento
click executa quado o pornteiro do mouse clica no elemento

*/
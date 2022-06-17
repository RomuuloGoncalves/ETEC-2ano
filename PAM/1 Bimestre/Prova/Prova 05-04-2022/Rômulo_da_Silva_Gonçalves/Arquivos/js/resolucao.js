function aposentadoria(){
    let codigo = document.getElementById("txtcodigo").value 
    let anoNascimento = document.getElementById("txtanonascimento").value 
    let anoIngressoEmpresa = document.getElementById("txtanoingresso").value 

    let anoAtual = 2022
    let idade = anoAtual - anoNascimento
    let tempoTrabalho =  anoAtual - anoIngressoEmpresa

    //código empregado
    document.getElementById("txtresultadocodigo").value = codigo


    //idade 
    document.getElementById("txtidade").value = idade

    // tempo de trabalho
    document.getElementById("txttempotrabalho").value = tempoTrabalho

    //situação
    if(idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)){
        document.getElementById("txtsituacao").value = "Requerer aposentadoria"
    }

    else{
        document.getElementById("txtsituacao").value = "Não requerer aposentadoria"

    }

}
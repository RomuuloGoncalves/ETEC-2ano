// JSON
//JavaScript Object Notation

//criando objeto em JSON
//chave: valor

// const aluno = {
//     "nome": "Rômulo",
//     "nascimento": "16/11/2005",
//     "email": "romulo@gmail.com",
//     "qtdfilhos": 0
// }

// alert(aluno.nome)
// alert(aluno["email"])

// const tarefa1 = {
//     "titulo": "Entregar prova de PAM",
//     "datalimite": "08-04-2022"
// }

// //adicionando tarefa1 ao array
// PROXIMAS_TAREFAS.push(tarefa1)

// //adicionando um novo objeto no array
// PROXIMAS_TAREFAS.push(
// {
//     "titulo": "Entregar prova de PAM",
//     "datalimite": "15-04-2022"
// }
// )

// PROXIMAS_TAREFAS[0].titulo = "Falar com o professor"

const PROXIMAS_TAREFAS = [];
const TAREFAS_CONCLUIDAS = [];

const campoData = document.getElementById("data");
const campoTitulo = document.getElementById("titulo");
const btnSalvar = document.getElementById("salvar");

const modal = document.querySelector(".modal");
const main = document.querySelector("main");

const DIV_PROXIMAS_TAREFAS = document.getElementById("proximas-tarefas");
const DIV_TAREFAS_CONCLUIDAS = document.getElementById("tarefas-concluidas");

// PROXIMAS_TAREFAS.push({
//     titulo: "Limpar quarto",
//     datalimite: "2022-05-10",
// });

// PROXIMAS_TAREFAS.push({
//     titulo: "Lavar a louça",
//     datalimite: "2022-06-17",
// });

// PROXIMAS_TAREFAS.push({
//     titulo: "Estudar",
//     datalimite: "2022-05-12",
// });

// PROXIMAS_TAREFAS.push({
//     titulo: "Fazer trabalho",
//     datalimite: "2022-05-18",
// });

btnSalvar.addEventListener("click", () => {
    let titulo, datalimite;
    titulo = campoTitulo.value;
    datalimite = campoData.value;

    let obj = {
        titulo: titulo,
        datalimite: datalimite,
    };
    PROXIMAS_TAREFAS.push(obj);
    atualizarLista();
    fechar();
});

function concluirTarefa(i) {
    TAREFAS_CONCLUIDAS.push(PROXIMAS_TAREFAS.splice(i, 1)[0]);

    atualizarLista();
}

function retornarTarefa(i) {
    PROXIMAS_TAREFAS.push(TAREFAS_CONCLUIDAS.splice(i, 1)[0]);
    atualizarLista();
}

function atualizarLista() {
    DIV_PROXIMAS_TAREFAS.innerHTML = "";

    PROXIMAS_TAREFAS.forEach((tarefa, i) => {
        let modelo = ` 
            <div class="tarefa">
                <input type="checkbox" onchange="concluirTarefa(${i})" id="tarefa-${i}">
                <label for="tarefa-${i}">${tarefa.titulo} - ${tarefa.datalimite}</label>
            </div>
        `;
        console.log(tarefa);
        DIV_PROXIMAS_TAREFAS.innerHTML += modelo;
    });

    DIV_TAREFAS_CONCLUIDAS.innerHTML = " ";

    TAREFAS_CONCLUIDAS.forEach((tarefa, i) => {
        let modelo = ` 
        <div class="tarefa">
            <input type="checkbox" onchange="retornarTarefa(${i})" id="tarefac-${i}">
            <label for="tarefac-${i}">${tarefa.titulo} - ${tarefa.datalimite}</label>
        </div>
    `;
        DIV_TAREFAS_CONCLUIDAS.innerHTML += modelo;
    });
}

atualizarLista();

function abrir() {
    modal.style.display = "flex";
    main.classList.add("blur");
}

function fechar() {
    modal.style.display = "none";
    main.classList.remove("blur");
}

fechar();

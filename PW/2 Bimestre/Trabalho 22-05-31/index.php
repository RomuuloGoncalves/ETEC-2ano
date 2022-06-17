<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulário</title>
    <link rel="stylesheet" href="css/Style.css">
    <link rel="stylesheet" href="css/buttonStyle.css">
</head>

<body>
    <main>
        <h1>Realizar pedido de parceria</h1>

        <form action="envio.php" method="post">
            <h2>Sobre você</h2>


            <div class="campos">
                <div class="campo">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Insira seu nome" />
                </div>

                <div class="campo">
                    <label for="email">E-mail:</label>
                    <input type="text" id="email" name="email" placeholder="Insira seu E-mail" />
                </div>
            </div>

            <div class="campos">
                <div class="campo">
                    <label for="telefone">Telefone de contato:</label>
                    <input type="text" id="telefone" name="telefone" placeholder="Insira seu telefone" />
                </div>

                <div class="campo">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" placeholder="Insira seu CPF" />
                </div>


            </div>
                <div class="campo">
                    <label for="ramo">Ramo de negócios:</label>
                    <input type="text" id="ramo" name="ramo" placeholder="Informe com o que trabalha " />
                </div>
            <div class="campo">
                <label for="proposta">Proposta de negócios:</label>
                <textarea name="proposta" id="proposta" cols="20" rows="6" placeholder="Qual sua prosposta para trabalhar com essa empresa?"></textarea>
            </div>

            <h2>Sobre a empresa parcera</h2>

            <div class="campo">
                <label for="nomeEmpresa">Nome da empresa:</label>
                <input type="text" id="nomeEmpresa" name="nomeEmpresa" placeholder="Insira o nome da empresa" />
            </div>

            <div class="campo">
                <label for="emailEmpresa" >E-mail de contato:</label>
                <input type="text" id="emailEmpresa" name="emailEmpresa" placeholder="Insira o E-mail da empresa" />
            </div>

            <button class="btn fifth">Enviar</button>
        </form>
    </main>
</body>

</html>
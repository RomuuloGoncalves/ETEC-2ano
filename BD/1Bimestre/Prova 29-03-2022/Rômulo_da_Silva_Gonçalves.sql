-- 1. Como fica a linha de comando para importar o script do banco de dados?
    source C:\Área de Trabalho\BD_Prova.sql

-- 2. Faça um insert em cada tabela.

    insert into colaborador
    VALUES (0, "Rômulo", "12345678910",5,9,5000.00, 2018-11-16);

    insert into Dependente
    VALUES (0, "Gabriel", "A", 2020-01-16, 8);

    insert into Cargo
    VALUES (5, "Rômulo", 5000.00);

-- 3. Faça uma atualização do salário do cargo de maestro para 1200.
    update Cargo 
    salario = 1200
    where Nome = "Maestro";

-- 4. Exclua todos os colaboradores cujo salário seja maior que 2000.
    delete from Colaborador
    where Salario > 2000.00;

-- 5. Faça uma consulta onde seja exibido o nome do colaborador, seu cpf e sua data de admissão.
    select Nome, Cpf, dataadm
    from Colaborador;

-- 6. Faça uma consulta que exiba o nome do dependente e sua data de nascimento.
    select Nome, Data_nascimento
    from Dependente;

-- 7. Faça uma consulta onde seja exibido o nome do cargo com o maior salário cadastrado.
    select max(Salario), nome
    from cargo;

-- 8. Faça uma consulta que exiba o nome do colaborador mais antigo na empresa.
    select Nome, min(dataadm)
    from Colaborador;
    

-- 9. Faça uma consulta que exiba a quantidade de dependentes agrupados por tipo de vínculo.
    select count(*), vinculo
    from Dependente
    group by vinculo;

-- 10.Faça uma consulta que exiba todos os colaboradores admitidos no ano de 2007.
    select Nome
    from Colaborador
    where dataadm like "2007%";

-- 11.Faça uma consulta que exiba todos os cargos com salário entre 500 e 1000.
    select Nome, salario
    from cargo
    where salario between 500 and 1000;
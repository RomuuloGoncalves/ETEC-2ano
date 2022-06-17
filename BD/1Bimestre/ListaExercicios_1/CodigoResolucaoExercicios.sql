-- 1) Conte a quantidade de alunos do sexo feminino usando as cláusulas COUNT e WHERE.	

    select count(*) from aluno
    where SexoAluno = 'F';

-- 2) Conte a quantidade de alunos do sexo masculino usando as cláusulas COUNT e WHERE

	select count(*) from aluno
    where SexoAluno = 'M';

-- 3) Conte a quantidade de alunos do sexo masculino e feminino em um único select usando as cláusulas COUNT e group by.	

    select SexoAluno, count(*) from aluno
    group by SexoAluno;

-- 4) Qual é a diferença entre o número de homens e mulheres? Use a cláusulas Count, Where.

    select count(*) - (select count(*) from aluno
    where SexoAluno = 'F') from aluno
    where SexoAluno = 'M';
 
-- 5) Qual é a média de idade dos estudantes da escola Etec? Usar AVG

    select avg(IdadeAluno) from aluno;

-- 6) Selecione o nome dos alunos mais novos da escola, Usar Where e MIN.

    select NomeAluno, IdadeAluno 
    from aluno 
    where IdadeAluno = (select min(IdadeAluno) from aluno);

-- 7) Selecione o nome dos alunos mais velhos da escola, Usar Where e MAX.

    select NomeAluno, IdadeAluno from aluno 
    where IdadeAluno = (select max(IdadeAluno) from aluno);

-- 8) Selecione todas as idades possíveis, ordene de forma crescente e conte quantos alunos possui cada uma das idades. Usar COUNT, GROUP BY, e ORDER BY.
-- Ex:
-- 	Idade       Quantidade
-- 	----------- -----------
-- 	17          2
-- 	18          31
-- 	19          18
-- 	20          149
-- 	21          75

    select count(IdadeAluno), IdadeAluno from aluno
    group by IdadeAluno
    order by IdadeAluno asc;


-- 9) Liste todas as cidades onde os alunos residem e conte quantos aluno residem em cada cidade, ordene as cidades em ordem decrescente. Usar COUNT, GROUP BY, e ORDER BY.
-- Ex:
-- 	Cidade               Quantidade
-- 	-------------------- -----------
-- 	Alumínio             53
-- 	Boituva              191
-- 	Cabreúva             54
-- 	Indaiatuba           43
-- 	Iperó                40
-- 	Itu                  179

    select count(*), Cidade from aluno
    group by Cidade
    order by count(*) desc;


-- 10) Selecione o nome, o sexo, a idade, e a cidade do aluno onde nome se inicializa com A, sexo é igual a F, cidade é igual Sorocaba e idade é maior que 25 e menor que 40. Usar Where e like, between.

    select NomeAluno, SexoAluno, IdadeAluno, Cidade from aluno
    where NomeAluno like "A%" and SexoAluno = "f" and Cidade = "Sorocaba" and IdadeAluno between 25 and 40;

-- 11) Selecione o nome do aluno e o nome do curso onde o período da matricula é noturno (N) e o curso é Logística. Usar Where 99 linhas de resposta

    select nomealuno, nomecurso 
    from curso c INNER JOIN alunomatriculadocurso amc inner join aluno A
    on c.codcurso = amc.codcurso
    and a.codaluno = amc.codaluno
    where c.nomecurso like "Logística%" and amc.Periodo like "N";

-- 12) Selecione todas as disciplinas do curso de Análise e Desenvolvimento de Sistemas. Usar Where. – 30 linhas de resposta

    select nomeDisciplina
    from disciplina d inner join cursospossuidisciplina cpd inner join curso c
    on d.CodDisciplina = cpd.CodDisciplina
    and cpd.CodCurso = c.CodCurso
    where NomeCurso = "Análise e Desenvolvimento de Sistemas";

-- 13) Selecione todas as disciplinas do curso de Fabricação Mecânica. Usar INNER JOIN - 30 linhas de resposta

    select nomeDisciplina
    from disciplina d inner join cursospossuidisciplina cpd inner join curso c
    on d.CodDisciplina = cpd.CodDisciplina
    and cpd.CodCurso = c.CodCurso
    where NomeCurso = "Fabricação Mecânica";

-- 14) Por quantas disciplinas cada curso é composto. Usar COUNT, INNER JOIN, GROUP BY 4 linhas de resposta
    select count(*), nomecurso
    from curso c inner join  cursospossuidisciplina cpd
    on  c.codcurso = cpd.codcurso 
    group by nomecurso;

-- 15) Selecione o nome do curso e o nome de seu respectivo coordenador. Usar INNER JOIN 5 linhas de resposta
    select nomecurso, NomeProfessor
    from curso c Inner join professor p
    on c.CoordenadorCurso = p.CodProfessor;

-- 16) Obtenha o nome do professor e a disciplina que ele ministra. Usar Inner Join 54 linhas de resposta
    select NomeProfessor, NomeDisciplina
    from professor p inner join professorministrardisciplina pmd inner join disciplina d
    on p.CodProfessor = pmd.CodProfessor and d.CodDisciplina = pmd.CodDisciplina; 

-- 17) Crie um select que traga o nome do professor e seus respectivos salários nas diversas disciplinas que ministra. Usar Inner Join 54 linhas de resposta

    select NomeProfessor, salario
    from professor p inner join professorministrardisciplina pmd inner join disciplina d
    on p.CodProfessor = pmd.CodProfessor and d.CodDisciplina = pmd.CodDisciplina; 

-- 18) Crie um select que traga como resultado o salário total do professor RAFAEL RIBEIRO CLAUDINO. Usar SUM, Where e GROUP BY 5779.00

    select NomeProfessor, sum(salario)
    from professor p inner join professorministrardisciplina pmd inner join disciplina d
    on p.CodProfessor = pmd.CodProfessor and d.CodDisciplina = pmd.CodDisciplina
    where NomeProfessor like "RAFAEL RIBEIRO CLAUDINO";

-- 19) Crie um select que traga como resultado o salário total do professor ALEXANDRE SANCHES. Usar SUM, INNER JOIN, Where e GROUP BY 4334.00

    select NomeProfessor, sum(salario)
    from professor p inner join professorministrardisciplina pmd inner join disciplina d 
    on p.CodProfessor = pmd.CodProfessor and pmd.CodDisciplina = d.CodDisciplina
    where NomeProfessor like "ALEXANDRE SANCHES";

-- 20) Crie um select que traga o nome dos professores e seus respectivos salario total. Usar SUM, Where e GROUP BY 25 linhas de resposta

    select NomeProfessor, sum(salario)
    from professor p inner join professorministrardisciplina pmd inner join disciplina d 
    on p.CodProfessor = pmd.CodProfessor and pmd.CodDisciplina = d.CodDisciplina
    group by NomeProfessor;

-- 21) Crie um select que traga o nome do professor e seu respectivo salário para o professor que possui o maior salário. Usar LIMIT, SUM, Where,GROUP BY e ORDER BY 1 linha de resposta

    select NomeProfessor, sum(salario)
    from professor, professorministrardisciplina
    where professor.CodProfessor = professorministrardisciplina.CodProfessor 
    group by NomeProfessor
    order by sum(salario) desc
    limit 1;

-- 22) Selecione o nome do curso, o nome do aluno, o nome da disciplina, a nota do aluno na disciplina, onde professor for igual a MARCIUS ANNOROZO SILVA. Usar INNER JOIN e WHERE 1799 linhas de resposta

    select nomecurso, nomealuno, nomeDisciplina, nota, NomeProfessor
    from curso c inner join alunomatriculadocurso amc inner join aluno a inner join alunomatriculadodisciplina amd inner join disciplina d inner join professorministrardisciplina pmd inner join professor p
    on p.CodProfessor = pmd.CodProfessor and d.CodDisciplina = pmd.CodDisciplina and a.CodAluno = amd.codaluno and amd.CodDisciplina = d.CodDisciplina and c.codcurso = amc.codcurso and amc.codaluno = a.codaluno
    where NomeProfessor like "MARCIUS ANNOROZO SILVA";

-- 23) Qual é a nota média de cada disciplina. Usar AVG, INNER JOIN e GROUP BY 54 ou 55 linhas de resposta

    select avg(nota), NomeDisciplina
    from aluno a inner join alunomatriculadodisciplina amd inner join disciplina d 
    on a.codaluno = amd.codaluno and amd.CodDisciplina = d.CodDisciplina
    group by nomeDisciplina;

-- 24) Para que o aluno seja aprovado é necessário que ele possua nota superior a 5. Qual disciplina possui o menor indice de reprova. Usar LIMIT, COUNT, INNER JOIN, GROUP BY, ORDER BY

    select nomeDisciplina, count(*)
    from aluno a inner join alunomatriculadodisciplina amd inner join disciplina d 
    on a.codaluno = amd.codaluno and amd.CodDisciplina = d.CodDisciplina
    where nota > 5
    group by nomeDisciplina
    order by count(*) desc
    limit 1;

    -- ou --

    select nomeDisciplina, count(*)
    from alunomatriculadodisciplina amd inner join disciplina d 
    on amd.CodDisciplina = d.CodDisciplina
    where nota > 5
    group by nomeDisciplina
    order by count(*) desc
    limit 1;
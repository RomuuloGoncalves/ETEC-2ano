-- Boletim escolar 
-- * Nome do aluno
-- * Nome do curso
-- * Nome das disciplinas
-- * Notas

select NomeAluno, NomeDisciplina, NomeCurso, Nota
from curso c inner join alunomatriculadocurso amc inner join aluno a inner join alunomatriculadodisciplina amd inner join disciplina d
on c.codcurso = amc.codcurso and amc.codAluno = a.codAluno and a.codAluno = amd.codAluno and amd.codDisciplina = d.codDisciplina
where a.NomeAluno = "WILLIAN OLIVEIRA DE ARRUDA";


-- listar os professores de um determinado curso

select distinct NomeProfessor, NomeCurso
from professor p inner join professorministrardisciplina pmd inner join disciplina d inner join cursospossuidisciplina cpd inner join curso c
on  p.codProfessor =  pmd.codProfessor and pmd.codDisciplina = d.codDisciplina and d.codDisciplina = cpd.codDisciplina and cpd.codcurso = c.codcurso
where c.NomeCurso = "Análise e Desenvolvimento de Sistemas";

-- média de cada disciplina de um determinado curso

select NomeDisciplina, round(avg(nota), 1) as "media das notas", NomeCurso
from curso c inner join cursospossuidisciplina cpd inner join  disciplina d inner join alunomatriculadodisciplina amd
on c.codcurso = cpd.codcurso and cpd.codDisciplina = d.codDisciplina and d.codDisciplina = amd.codDisciplina
where c.NomeCurso = "Análise e Desenvolvimento de Sistemas"
group by d.NomeDisciplina;
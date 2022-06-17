create view listar_cursos as(
    select codcurso, nomecurso, coordenadorcurso
    from curso
);

select * from listar_cursos;

delete from listar_cursos 
where codcurso = 33234;

insert into listar_cursos 
values (10, "Recursos Humanos", 0); -- Obs: os outros campos da tabela curso com valor nulo ou com 0

select * from curso;


-- Visão é como se fosse uma função, que agrupa selects, basta que coloque o where e os outros fltros
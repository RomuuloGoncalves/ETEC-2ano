-- criar
create database Pizzaria;

-- entrar

use Pizzaria;

create table cliente(
    nome varchar (50) not null,
    cpf char (11) not null,
    senha int not null,
    endereço varchar (50) not null,
    telefone varchar (12) not null,
    codcli int primary key unique auto_increment
);

create table pedido(    
    diaped date not null,
    horaped time not null,
    numped int primary key
);

create table fornada(
    numfornada int not null,
    num_de_pizza int not null
);

create table pizza(
    saborpiz varchar (50) not null,
    preçopiz decimal (8,2) not null,
    personapiz varchar (50), -- pizza peronalizada
    codpiz int primary key auto_increment
);

create table ingrediente(
    nomeingre varchar (50) not null,
    preçoingre decimal (8,2) not null,
    codingre int primary key auto_increment
);

create table bebida(
    tipo varchar (50) not null,
    preço decimal (8, 2) not null,
    codigo int primary key auto_increment
);

create table tamanho(
    Codtam int primary key ,
    desconttam decimal (8,2)	not null,
    nometam varchar (50) not null

);

create table pizza_pedida(
    numped_pizza int primary key auto_increment,
    quantped_pizza int not null
);

create table ingrediente_pizza(
    codingre_pizza int not null,
    codpizza_ingre int not null
);

create table bebida_pedida(
    quantidbebida int not null,
    codbebida int not null
);


-- ingrediente_pizza
alter table ingrediente_pizza
add constraint codingre_pizza_fk
foreign key (codingre_pizza)
references pizza(codpiz);

-- ingrediente_pizza -- 2
alter table ingrediente_pizza
add constraint codpizza_ingre_fk
foreign key (codpizza_ingre)
references ingrediente(codingre);

-- bebida_pedida
alter table bebida_pedida
add constraint codbebida_fk
foreign key (codbebida)
references bebida(codigo);
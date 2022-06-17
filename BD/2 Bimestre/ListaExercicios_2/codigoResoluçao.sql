-- 1 - Listar o nome do cliente, email e nome da cidade.

    select cl.nome, email, ci.nome
    from cliente cl inner join cidade ci
    on ci.idCidade like cl.idCidade;

-- 2 - Listar o nome do cliente, email, nome da cidade e nome do estado apenas das cidades do estado de SP.

    select cl.nome, email, ci.nome, e.nome
    from estado e inner join cliente cl inner join cidade ci
    on cl.idEstado = e.idEstado and ci.idCidade = cl.idCidade 
    where e.nome like "SP";
 
-- 3 - Listar o nome do cliente, email, nome da cidade e nome do estado apenas das cidades que tenham a letra "ó" no nome do cliente.

    select cl.nome as "Nome cliente", email, ci.nome as "Nome cidade", e.nome as "Nome estado"
    from estado e inner join cliente cl inner join cidade ci
    on cl.idEstado = e.idEstado and ci.idCidade = cl.idCidade 
    where cl.nome like "%ó%";

-- 4 - Listar o nome do produto e o nome da marca dos produtos que custem entre 1000 e 3000 reais

    select p.nome as "Nome produto", m.nome as "Nome marca"
    from produto p inner join marca m 
    on p.idMarca = m.idMarca
    where p.preco between 1000 and 3000;

-- 5 - Listar o nome do produto, nome da marca e nome da categoria dos produtos que tenham a letra "e" no nome do produto.

    select p.nome as "produto", m.nome as "marca", c.nome as "categoria"
    from marca m inner join produto p inner join categoria c
    on m.idMarca = p.idMarca and p.idCategoria = c.idCategoria
    where p.nome like "%e%";

-- 6 - Listar o número do pedido, a data do pedido e nome do cliente dos pedidos com realizados no mês 08/2016.

    select p.idPedido as "Numero do pedido", data_pedido as "Data do pedido", cl.nome as "Nome do clinte"
    from pedido p inner join cliente cl
    on p.idCliente = cl.idCliente 
    where p.data_pedido like "2016-08%";

-- 7 - Listar o número do pedido, a data do pedido, nome do cliente e nome do vendedor dos pedidos com realizados no mês 07/2016.

    select p.idPedido as "Numero do pedido", data_pedido as "Data do pedido", cl.nome as "Nome do clinte", v.nome as "Nome do vendedor"
    from vendedor v inner join pedido p inner join cliente cl
    on p.idCliente = cl.idCliente and p.idVendedor = v.idVendedor
    where p.data_pedido like "2016-07%";

-- 8 - Listar os nome e preço dos produtos comprados pelo cliente de id=1

    select pro.nome as "Nome produto", pro.preco as "Preço produto"
    from cliente c inner join pedido p inner join itens_pedido ip inner join produto pro 
    on c.idCliente = p.idCliente and p.idPedido = ip.idPedido and ip.idProduto = pro.idProduto
    where c.idCliente = 1;

-- 9 - Listar o número do pedido e o nome clientes que possuem pedidos e também dos que não possuem pedidos.

    select p.idPedido as "Numero pedido", c.nome as "Nome cliente"
    from cliente c left join pedido p
    on c.idCliente = p.idCliente;

-- 10 - Listar o nome, preço, nome da categoria e nome da marca do
. produto mais caro.

    select p.nome as "Nome produto", p.preco as "Produto preço", c.nome as "Categoria nome", m.nome as "Marca nome"
    from categoria c inner join produto p inner join marca m
    on c.idCategoria = p.idCategoria and p.idMarca = m.idMarca
    order by p.preco desc
    limit 1;

-- 11 - Listar o número do pedido, valor total e nome do cliente do pedido mais caro.

    select p.idPedido as "Numero pedido", p.valorpedido as "Valor pedido", c.nome as "Nome cliente"
    from cliente c inner join pedido p
    on c.idCliente = p.idCliente
    order by valorpedido desc
    limit 1; 

-- 12 - Listar o número do pedido, valor total e nome do vendedor do pedido mais barato.

    select p.idPedido as "Numero pedido",  p.valorpedido as "Valor pedido", v.nome as "Nome vendedor"
    from vendedor v inner join pedido p
    on v.idVendedor = p.idVendedor
    order by p.valorpedido asc
    limit 1;


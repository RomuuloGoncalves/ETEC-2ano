-- resolução 1

select c.nome as "Nome da cidade"
from cliente cli inner join cidade c
on cli.idCidade = c.idCidade
group by c.nome
order by count(cli.idCliente) desc
limit 1;

-- resolução 2

select nome as "Nome do produto"
from produto p inner join itens_pedido ip inner join pedido pe
on p.idProduto = ip.idProduto and ip.idPedido = pe.idPedido
group by p.nome
order by count(p.nome) desc
limit 1;

-- resolução 3

select v.nome as "Nome do vendedor"
from vendedor v inner join pedido p inner join itens_pedido ip
on v.idVendedor = p.idVendedor and p.idPedido = ip.idPedido
group by v.nome
order by  sum(ip.valor_total) desc
limit 1;
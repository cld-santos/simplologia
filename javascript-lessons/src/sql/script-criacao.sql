--drop table produtos;
create table PRODUTOS (
	ID_PK INTEGER,
	NOME VARCHAR(50),
	PRECO_UNITARIO INTEGER,
	INGREDIENTES VARCHAR(100),
	DESCRICAO VARCHAR(100));

insert into produtos(id_pk, nome, preco_unitario, ingredientes, descricao) values(1,'PIZZA',10,'testeste testestes','');
insert into produtos(id_pk, nome, preco_unitario, ingredientes, descricao) values(2,'PIZZA',10,'testeste testestes','');
insert into produtos(id_pk, nome, preco_unitario, ingredientes, descricao) values(3,'PIZZA',10,'testeste testestes','');
insert into produtos(id_pk, nome, preco_unitario, ingredientes, descricao) values(4,'PIZZA',10,'testeste testestes','');
insert into produtos(id_pk, nome, preco_unitario, ingredientes, descricao) values(5,'PIZZA',10,'testeste testestes','');


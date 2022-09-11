create sequence hibernate_sequence
start 1 increment 1;

create table currency (
    id varchar(255) not null,
    char_code varchar(255),
    name varchar(255),
    num_code varchar(255),
    primary key (id)
);

create table exratetorub (
    id int8 not null,
    date date,
    nominal int8,
    value float8,
    currency_id varchar(255),
    primary key (id)
);

create table stat (
    id int8 not null,
    amount float8,
    date_time timestamp,
    ex_rate float8,
    cur_from_id varchar(255),
    cur_to_id varchar(255),
    primary key (id)
);

alter table if exists exratetorub
add constraint exratetorub_currency_id_fk
foreign key (currency_id) references currency;

alter table if exists stat
add constraint stat_currency_from_id_fk
foreign key (cur_from_id) references currency;

alter table if exists stat
add constraint stat_currency_to_id_fk
foreign key (cur_to_id) references currency;
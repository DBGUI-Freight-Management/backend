-- create database freight;
use freight;
create table shipCompanies (name VARCHAR(50), id integer);
create table ships(name VARCHAR(50), id integer, companyID integer);
show tables;
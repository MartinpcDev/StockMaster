CREATE TYPE role_enum AS ENUM ('ADMIN', 'USER');
CREATE TABLE usuarios
(
    id         bigint       NOT NULL PRIMARY KEY,
    nombre     varchar(500) NOT NULL,
    email      varchar(500) NOT NULL UNIQUE,
    username   varchar(500) NOT NULL UNIQUE,
    password   varchar(500) NOT NULL,
    role       role_enum    NOT NULL,
    created_at date         NOT NULL
);
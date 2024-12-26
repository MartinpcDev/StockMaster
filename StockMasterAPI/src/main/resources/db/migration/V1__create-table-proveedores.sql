CREATE TABLE proveedores
(
    id        bigint       NOT NULL PRIMARY KEY,
    nombre    varchar(500) NOT NULL UNIQUE,
    email     varchar(500) NOT NULL UNIQUE,
    telefono  varchar(500) NOT NULL UNIQUE,
    direccion varchar(500) NOT NULL
);
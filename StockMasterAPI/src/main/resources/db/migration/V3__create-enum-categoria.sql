CREATE TYPE categoria_enum AS ENUM ('ELECTRONICOS', 'ALIMENTOS', 'HOGAR', 'VESTIMENTA','DEPORTES');
CREATE TABLE productos
(
    id            bigint           NOT NULL PRIMARY KEY,
    nombre        varchar(500)     NOT NULL UNIQUE,
    descripcion   varchar(500)     NOT NULL,
    precio        double precision NOT NULL,
    stock         integer          NOT NULL,
    fecha_ingreso date             NOT NULL,
    categoria     categoria_enum   NOT NULL,
    proveedor_id  bigint           NOT NULL
);
# StockMaster

Aplicación de Gestión de inventario para productos, proveedores

## Caracteristicas

### Backend

- **Framework**: SpringBoot
- **Base de Datos**: PostgreSQL
- **Seguridad**: Spring Security, JWT
- **Docker**: Dockerizado para fácil despliegue
- **Características clave**:
  - Paginación y seguridad en las rutas
  - Manejo de Cookies y tokens de sesion
  - CRUD completo para la entidad User
  - CRUD completo para la entidad Productos
  - CRUD completo para la entidad Proveedores
  - Documentacion en Swagger

### Frontend

- **Framework**: NextJS
- **Lenguaje**: Typescript
- **Estilos**: TailwindCSS
- **Características clave**:
  - Paginación en la interfaz
  - Formularios
  - Validaciones

## Estructura

```plaintext
StockMaster/
├─ StockMasterAPI/        # Código del backend (Spring Boot)
   ├── src/        # Código fuente del backend
   ├── Dockerfile  # Configuración de Docker para el backend
   └── docker-compose.yml # Archivo de configuración para Docker Compose
├─ stock_master_web/       # Código del frontend (Angular)
   ├── src/        # Código fuente del frontend
   ├── tailwind.config.js  # Configuración de TailwindCSS
   └── ...
```

## Instalación y Configuración

### Requisitos previos

- Docker y Docker Compose instalados
- Node.js y npm instalados para desarrollo del frontend
- Java 17 y Maven instalados para desarrollo del backend

### Pasos para el despliegue

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/MartinpcDev/StockMaster
   cd StockMaster
   ```

2. **Configurar el backend**

   - Crear un archivo `application.properties` en `backend/src/main/resources` con los datos de conexión a PostgreSQL:

     ```properties
     spring.application.name=Stock Master Backend
     server.servlet.context-path=/api/v1
     spring.datasource.url=jdbc:postgresql://stockmasterDB:5432/stockmaster_db
     spring.datasource.username=martinpc
     spring.datasource.password=123456
     spring.jpa.hibernate.ddl-auto=update
     jwt.security.secret=cGFsYWJyYXNlY3JldGFwYXJhbWlnZXN0b3JkZWludmVudGFyaW9lczEy
     jwt.security.expiration=43200000
     ```

3. **Iniciar los servicios con Docker Compose**

   ```bash
   docker-compose up --build
   ```

4. **Acceder a la aplicación**
   - Frontend: [http://localhost:3000](http://localhost:4200)
   - Backend: [http://localhost:8080/api/v1](http://localhost:8080/api/v1)
   - Documentacion en Swagger: [http://localhost:8080/api/v1/swagger-ui.html](http://localhost:8080/api/v1/swagger-ui.html)

## Tecnologías Utilizadas

### Backend
- Spring Boot
- Spring Security
- JWT
- Swagger
- PostgreSQL
- Docker

### Frontend
- NextJS
- TailwindCSS
- React-Hook-Form
- Typescript
- Sonner
- Axios

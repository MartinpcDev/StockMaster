package com.management.api.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.http.HttpHeaders;

@OpenAPIDefinition(
    info = @Info(
        title = "Stock Master",
        description = "Stock Master es una API para el manejo de productos y proveedores",
        version = "1.0.0",
        contact = @Contact(
            name = "Martin Palomino",
            url = "https://github.com/MartinpcDev",
            email = "martinchrispc@hotmail.com"
        ),
        license = @License(
            name = "Standar Licence Use License for MartinDev"
        )
    ),
    servers = {
        @Server(
            description = "DEV SERVER",
            url = "http://localhost:8080/api/v1"
        )
    },
    security = @SecurityRequirement(name = "Security Token")
)
@SecurityScheme(
    name = "Security Token",
    description = "Access Token for my API",
    type = SecuritySchemeType.HTTP,
    paramName = HttpHeaders.AUTHORIZATION,
    in = SecuritySchemeIn.HEADER,
    scheme = "bearer",
    bearerFormat = "JWT"
)
public class CustomSwaggerConfig {

}

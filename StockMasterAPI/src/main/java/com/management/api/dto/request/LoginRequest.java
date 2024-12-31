package com.management.api.dto.request;

import jakarta.validation.constraints.NotBlank;

public record LoginRequest(
    @NotBlank(message = "El nombre de usuario no puede estar vacío")
    String username,
    @NotBlank(message = "La contraseña no puede estar vacía")
    String password
) {

}

package com.management.api.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
    @NotBlank(message = "El nombre es requerido")
    @Size(min = 3, max = 50, message = "El nombre debe tener entre 3 y 50 caracteres")
    String nombre,
    @NotBlank(message = "El email es requerido")
    @Email(message = "El email no es válido")
    String email,
    @NotBlank(message = "El username es requerido")
    @Size(min = 3, max = 20, message = "El username debe tener entre 3 y 20 caracteres")
    String username,
    @NotBlank(message = "La password es requerida")
    @Size(min = 6, max = 40, message = "La password debe tener entre 6 y 40 caracteres")
    String password
) {

}

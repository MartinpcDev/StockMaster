package com.management.api.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ProveedorRequest(
    @NotBlank(message = "El nombre del proveedor es requerido")
    @Size(min = 3, max = 50, message = "El nombre del proveedor debe tener entre 3 y 50 caracteres")
    String nombre,
    @NotBlank(message = "La dirección del proveedor es requerida")
    @Size(min = 3, max = 255, message = "La dirección del proveedor debe tener entre 3 y 255 caracteres")
    String direccion,
    @NotBlank(message = "El teléfono del proveedor es requerido")
    @Pattern(regexp = "^[0-9]{9}$", message = "El teléfono del proveedor debe tener 9 dígitos")
    String telefono,
    @NotBlank(message = "El email del proveedor es requerido")
    @Email(message = "El email del proveedor debe ser válido")
    String email
) {

}

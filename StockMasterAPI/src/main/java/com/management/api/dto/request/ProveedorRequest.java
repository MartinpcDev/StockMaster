package com.management.api.dto.request;

public record ProveedorRequest(
    String nombre,
    String direccion,
    String telefono,
    String email
) {

}

package com.management.api.dto.response;

public record ProveedorOnlyResponse(
    Long id,
    String nombre,
    String direccion,
    String telefono,
    String email
) {

}

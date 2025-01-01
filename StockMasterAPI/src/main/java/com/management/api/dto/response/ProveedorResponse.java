package com.management.api.dto.response;

import java.util.List;

public record ProveedorResponse(
    Long id,
    String nombre,
    String direccion,
    String telefono,
    String email,
    List<ProductOnlyResponse> products
) {

}

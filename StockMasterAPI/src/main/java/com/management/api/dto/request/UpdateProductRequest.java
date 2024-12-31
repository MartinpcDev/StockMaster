package com.management.api.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record UpdateProductRequest(
    @Size(min = 3, max = 50, message = "El nombre del producto debe tener entre 3 y 50 caracteres")
    String nombre,
    @Size(min = 3, max = 255, message = "La descripción del producto debe tener entre 3 y 255 caracteres")
    String descripcion,
    String categoria,
    @Positive(message = "El precio del producto debe ser mayor a 0")
    @Max(value = 9999, message = "El precio del producto no puede ser mayor a 9999")
    Double precio,
    @Positive(message = "El stock del producto debe ser mayor a 0")
    @Max(value = 9999, message = "El stock del producto no puede ser mayor a 9999")
    Integer stock,
    @Positive(message = "El id del proveedor debe ser mayor a 0")
    Long proveedorId
) {

}

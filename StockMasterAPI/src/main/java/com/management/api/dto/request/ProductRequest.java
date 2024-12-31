package com.management.api.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record ProductRequest(
    @NotBlank(message = "El nombre del producto es requerido")
    @Size(min = 3, max = 50, message = "El nombre del producto debe tener entre 3 y 50 caracteres")
    String nombre,
    @NotBlank(message = "La descripción del producto es requerida")
    @Size(min = 3, max = 255, message = "La descripción del producto debe tener entre 3 y 255 caracteres")
    String descripcion,
    @NotBlank(message = "La categoría del producto es requerida")
    String categoria,
    @NotNull(message = "El precio del producto es requerido")
    @Positive(message = "El precio del producto debe ser mayor a 0")
    @Max(value = 9999, message = "El precio del producto no puede ser mayor a 9999")
    Double precio,
    @NotNull(message = "El stock del producto es requerido")
    @Positive(message = "El stock del producto debe ser mayor a 0")
    @Max(value = 9999, message = "El stock del producto no puede ser mayor a 9999")
    Integer stock,
    @NotNull(message = "El id del proveedor es requerido")
    @Positive(message = "El id del proveedor debe ser mayor a 0")
    Long proveedorId
) {

}

package com.management.api.dto.response;

import com.management.api.persistence.model.ProductCategory;
import java.time.LocalDateTime;

public record ProductResponse(
    Long id,
    String nombre,
    String descripcion,
    Double precio,
    Integer stock,
    ProductCategory categoria,
    LocalDateTime fechaIngreso,
    ProveedorOnlyResponse proveedor
) {

}

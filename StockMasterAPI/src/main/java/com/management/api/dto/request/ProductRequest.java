package com.management.api.dto.request;

import com.management.api.persistence.model.ProductCategory;

public record ProductRequest(
    String nombre,
    String descripcion,
    ProductCategory categoria,
    double precio,
    int stock
) {

}

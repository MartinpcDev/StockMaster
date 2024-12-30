package com.management.api.dto.response;

import java.util.List;

public record ProveedorPageResponse(
    List<ProveedorResponse> proveedores,
    Integer page,
    Integer size,
    Integer total
) {

}

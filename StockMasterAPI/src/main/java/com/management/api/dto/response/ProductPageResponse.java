package com.management.api.dto.response;

import java.util.List;

public record ProductPageResponse(
    List<ProductResponse> productos,
    Integer page,
    Integer size,
    Integer total
) {

}

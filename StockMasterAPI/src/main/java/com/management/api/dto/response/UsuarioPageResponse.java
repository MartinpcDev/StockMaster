package com.management.api.dto.response;

import java.util.List;

public record UsuarioPageResponse(
    List<UsuarioResponse> usuarios,
    Integer page,
    Integer size,
    Integer total
) {

}

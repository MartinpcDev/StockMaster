package com.management.api.dto.response;

import com.management.api.persistence.model.UserRole;
import java.time.LocalDateTime;

public record UsuarioResponse(
    Long id,
    String nombre,
    String email,
    String username,
    UserRole role,
    LocalDateTime createdAt
) {

}

package com.management.api.mapper;

import com.management.api.dto.response.UsuarioResponse;
import com.management.api.persistence.model.Usuario;
import java.util.List;

public class UsuarioMapper {

  public static UsuarioResponse toUsuarioResponse(Usuario usuario) {
    if (usuario == null) {
      return null;
    }

    return new UsuarioResponse(
        usuario.getId(),
        usuario.getNombre(),
        usuario.getEmail(),
        usuario.getUsername(),
        usuario.getRole(),
        usuario.getCreatedAt()
    );
  }

  public static List<UsuarioResponse> toUsuarioResponseList(List<Usuario> usuarios) {
    return usuarios.stream()
        .map(UsuarioMapper::toUsuarioResponse)
        .toList();
  }
}

package com.management.api.mapper;

import com.management.api.dto.response.UsuarioPageResponse;
import com.management.api.persistence.model.Usuario;
import org.springframework.data.domain.Page;

public class PageMapper {

  public static UsuarioPageResponse toUsuarioPageResponse(Page<Usuario> usuariosPage) {
    if (usuariosPage == null) {
      return null;
    }

    return new UsuarioPageResponse(
        UsuarioMapper.toUsuarioResponseList(usuariosPage.getContent()),
        usuariosPage.getPageable().getPageNumber(),
        usuariosPage.getPageable().getPageSize(),
        (int) usuariosPage.getTotalElements()
    );
  }
}

package com.management.api.service.impl;

import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.UsuarioPageResponse;
import com.management.api.exception.UserNotFoundException;
import com.management.api.mapper.PageMapper;
import com.management.api.persistence.model.Usuario;
import com.management.api.persistence.repository.UsuarioRepository;
import com.management.api.service.IAdminService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AdminService implements IAdminService {

  private final UsuarioRepository usuarioRepository;

  public AdminService(UsuarioRepository usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  @Override
  public UsuarioPageResponse findAllUsers(Pageable pageable) {
    Page<Usuario> usuarioPage = usuarioRepository.findAll(pageable);
    return PageMapper.toUsuarioPageResponse(usuarioPage);
  }

  @Override
  public GenericResponse deleteUser(Long id) {
    Usuario usuarioExists = usuarioRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("Usuario no encontrado"));
    usuarioRepository.delete(usuarioExists);
    return new GenericResponse("Usuario eliminado correctamente");
  }
}

package com.management.api.service;

import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.UsuarioPageResponse;
import org.springframework.data.domain.Pageable;

public interface IAdminService {

  UsuarioPageResponse findAllUsers(Pageable pageable);

  GenericResponse deleteUser(Long id);
}

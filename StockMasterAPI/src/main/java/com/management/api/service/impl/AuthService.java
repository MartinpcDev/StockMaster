package com.management.api.service.impl;

import com.management.api.dto.request.LoginRequest;
import com.management.api.dto.request.RegisterRequest;
import com.management.api.dto.response.AuthResponse;
import com.management.api.dto.response.RegisterResponse;
import com.management.api.exception.InvalidAuthException;
import com.management.api.persistence.model.Usuario;
import com.management.api.persistence.repository.UsuarioRepository;
import com.management.api.service.IAuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService {

  private final UsuarioRepository usuarioRepository;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;

  public AuthService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder,
      AuthenticationManager authenticationManager) {
    this.usuarioRepository = usuarioRepository;
    this.passwordEncoder = passwordEncoder;
    this.authenticationManager = authenticationManager;
  }

  @Override
  public RegisterResponse register(RegisterRequest request) {
    if (usuarioRepository.existsByEmailIgnoreCase(request.email())
        || usuarioRepository.existsByUsernameIgnoreCase(request.username())) {
      throw new InvalidAuthException("El email o el nombre de usuario ya están en uso");
    }

    Usuario usuario = new Usuario();
    usuario.setNombre(request.nombre());
    usuario.setEmail(request.email());
    usuario.setUsername(request.username());
    usuario.setPassword(passwordEncoder.encode(request.password()));
    usuarioRepository.save(usuario);

    return new RegisterResponse("Usuario Registrado Satisfactoriamente");
  }

  @Override
  public AuthResponse login(LoginRequest request) {
    return null;
  }
}

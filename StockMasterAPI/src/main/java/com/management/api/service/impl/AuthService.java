package com.management.api.service.impl;

import com.management.api.dto.request.LoginRequest;
import com.management.api.dto.request.RegisterRequest;
import com.management.api.dto.response.AuthResponse;
import com.management.api.dto.response.RegisterResponse;
import com.management.api.exception.InvalidAuthException;
import com.management.api.persistence.model.Usuario;
import com.management.api.persistence.repository.UsuarioRepository;
import com.management.api.service.IAuthService;
import com.management.api.utils.JwtUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService {

  private final UsuarioRepository usuarioRepository;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;
  private final JwtUtils jwtUtils;

  public AuthService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder,
      AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
    this.usuarioRepository = usuarioRepository;
    this.passwordEncoder = passwordEncoder;
    this.authenticationManager = authenticationManager;
    this.jwtUtils = jwtUtils;
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
    Usuario usuarioExiste = usuarioRepository.findByUsernameIgnoreCase(request.username())
        .orElseThrow(() -> new InvalidAuthException("El usuario no esta registrado"));

    if (!passwordEncoder.matches(request.password(), usuarioExiste.getPassword())) {
      throw new InvalidAuthException("Contraseña incorrecta");
    }

    String token = jwtUtils.generateToken(usuarioExiste);

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.username(), request.password())
    );

    return new AuthResponse(token);
  }
}

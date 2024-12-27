package com.management.api.config.filter;

import com.management.api.exception.InvalidAuthException;
import com.management.api.persistence.repository.UsuarioRepository;
import com.management.api.utils.JwtUtils;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.http.HttpHeaders;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtUtils jwtUtils;
  private final UsuarioRepository usuarioRepository;
  private final UserDetailsService userDetailsService;

  public JwtAuthenticationFilter(JwtUtils jwtUtils, UsuarioRepository usuarioRepository,
      UserDetailsService userDetailsService) {
    this.jwtUtils = jwtUtils;
    this.usuarioRepository = usuarioRepository;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void doFilterInternal(
      @NonNull HttpServletRequest request,
      @NonNull HttpServletResponse response,
      @NonNull FilterChain filterChain) throws ServletException, IOException {

    String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

    if (authHeader != null && authHeader.startsWith("Bearer ")) {
      String token = authHeader.substring(7);
      String username = jwtUtils.extractUsername(token);

      usuarioRepository.findByUsernameIgnoreCase(username).ifPresentOrElse(usuario -> {
        if (jwtUtils.isTokenValid(token, usuario)) {
          UserDetails userDetails = userDetailsService.loadUserByUsername(username);
          UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
              userDetails, null, userDetails.getAuthorities()
          );
          authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
          SecurityContextHolder.getContext().setAuthentication(authToken);
        } else {
          throw new InvalidAuthException("Token inválido");
        }
      }, () -> {
        throw new InvalidAuthException("El usuario no existe");
      });
    }

    filterChain.doFilter(request, response);
  }
}

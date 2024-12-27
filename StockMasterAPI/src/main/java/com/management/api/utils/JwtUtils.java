package com.management.api.utils;

import com.management.api.persistence.model.Usuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtils {

  @Value("${jwt.security.secret}")
  private String SECRET_KEY;
  @Value("${jwt.security.expiration}")
  private Long EXPIRATION_TIME;

  public String generateToken(Usuario usuario) {
    Date issuedAt = new Date(System.currentTimeMillis());
    Date expirationAt = new Date(issuedAt.getTime() + EXPIRATION_TIME);
    Map<String, Object> claims = new HashMap<>();
    claims.put("id", usuario.getId());
    return Jwts.builder()
        .claims(claims)
        .subject(usuario.getUsername())
        .issuedAt(issuedAt)
        .expiration(expirationAt)
        .signWith(generateKey())
        .compact();
  }

  public String extractUsername(String token) {
    return extractClaim(token, Claims::getSubject);
  }

  public boolean isTokenValid(String token, Usuario usuario) {
    final String username = extractUsername(token);
    return username.equalsIgnoreCase(usuario.getUsername()) && !isTokenExpired(token);
  }

  private Date extractExpiration(String token) {
    return extractClaim(token, Claims::getExpiration);
  }

  private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  private <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
    final Claims claims = Jwts.parser()
        .verifyWith(generateKey())
        .build()
        .parseSignedClaims(token)
        .getPayload();
    return claimResolver.apply(claims);
  }

  private SecretKey generateKey() {
    final byte[] secretBytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(secretBytes);
  }
}

package com.management.api.controller;

import com.management.api.dto.request.LoginRequest;
import com.management.api.dto.request.RegisterRequest;
import com.management.api.dto.response.AuthResponse;
import com.management.api.dto.response.RegisterResponse;
import com.management.api.service.IAuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Tag(name = "Auth", description = "Endpoints para autenticación de usuarios")
public class AuthController {

  private final IAuthService authService;

  public AuthController(IAuthService authService) {
    this.authService = authService;
  }

  @Operation(
      summary = "Register User",
      description = "Register a new User",
      tags = {"Auth"},
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Authenticacion request with object user",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = RegisterRequest.class)
          )
      ),
      responses = {
          @ApiResponse(
              responseCode = "200",
              description = "Successful registration",
              content = @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = RegisterResponse.class)
              )
          )
      }
  )
  @PostMapping("/register")
  public ResponseEntity<RegisterResponse> register(@RequestBody @Valid RegisterRequest request) {
    return ResponseEntity.ok(authService.register(request));
  }

  @Operation(
      summary = "Login User",
      description = "Authenticate a user and return the authentication token along with user "
          + "details.",
      tags = {"Auth"},
      requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
          description = "Authenticacion request with username and password",
          required = true,
          content = @Content(
              mediaType = "application/json",
              schema = @Schema(implementation = LoginRequest.class)
          )
      ),
      responses = {
          @ApiResponse(
              responseCode = "200",
              description = "Successful authentication",
              content = @Content(
                  mediaType = "application/json",
                  schema = @Schema(implementation = AuthResponse.class)
              )
          )
      }
  )
  @PostMapping("/login")
  public ResponseEntity<AuthResponse> login(@RequestBody @Valid LoginRequest request) {
    return ResponseEntity.ok(authService.login(request));
  }
}

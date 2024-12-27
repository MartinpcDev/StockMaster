package com.management.api.service;

import com.management.api.dto.request.LoginRequest;
import com.management.api.dto.request.RegisterRequest;
import com.management.api.dto.response.AuthResponse;
import com.management.api.dto.response.RegisterResponse;

public interface IAuthService {

  RegisterResponse register(RegisterRequest request);

  AuthResponse login(LoginRequest request);
}

package com.management.api.dto.request;

public record LoginRequest(
    String username,
    String password
) {

}

package com.management.api.exception;

public class InvalidAuthException extends RuntimeException {

  public InvalidAuthException(String message) {
    super(message);
  }
}

package com.management.api.exception;

public class ProductNotFoundExcepticon extends RuntimeException {

  public ProductNotFoundExcepticon(String message) {
    super(message);
  }
}

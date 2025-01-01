package com.management.api.controller;

import com.management.api.dto.response.ExceptionResponse;
import com.management.api.exception.InvalidAuthException;
import com.management.api.exception.ProductNotFoundExcepticon;
import com.management.api.exception.ProveedorNotFoundExcepticon;
import com.management.api.exception.UserNotFoundException;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionController {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ExceptionResponse> methodArgumentNotValidException(
      MethodArgumentNotValidException e) {
    List<ObjectError> errors = e.getAllErrors();
    List<String> details = errors.stream()
        .map(error -> {
          if (error instanceof FieldError fieldError) {
            return fieldError.getField() + " " + error.getDefaultMessage();
          }
          return error.getDefaultMessage();
        }).toList();
    ExceptionResponse response = new ExceptionResponse(
        null,
        "Argumentos inválido",
        details
    );
    return ResponseEntity.badRequest().body(response);
  }


  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<ExceptionResponse> illegalArgumentException(IllegalArgumentException e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Argumento inválido",
        null
    );
    return ResponseEntity.badRequest().body(response);
  }

  @ExceptionHandler(UserNotFoundException.class)
  public ResponseEntity<ExceptionResponse> userNotFoundException(UserNotFoundException e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Recurso no encontrado",
        null
    );
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
  }

  @ExceptionHandler(ProveedorNotFoundExcepticon.class)
  public ResponseEntity<ExceptionResponse> proveedorNotFoundException(
      ProveedorNotFoundExcepticon e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Recurso no encontrado",
        null
    );
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
  }

  @ExceptionHandler(ProductNotFoundExcepticon.class)
  public ResponseEntity<ExceptionResponse> productNotFoundException(ProductNotFoundExcepticon e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Recurso no encontrado",
        null
    );
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
  }

  @ExceptionHandler(InvalidAuthException.class)
  public ResponseEntity<ExceptionResponse> invalidAuthException(InvalidAuthException e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Credenciales inválidas",
        null
    );
    return ResponseEntity.badRequest().body(response);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ExceptionResponse> allExceptions(Exception e) {
    ExceptionResponse response = new ExceptionResponse(
        e.getMessage(),
        "Ocurrió un error inesperado",
        null
    );
    return ResponseEntity.badRequest().body(response);
  }
}

package com.management.api.controller;

import com.management.api.dto.request.ProveedorRequest;
import com.management.api.dto.request.UpdateProveedorRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProveedorPageResponse;
import com.management.api.dto.response.ProveedorResponse;
import com.management.api.service.IProveedorService;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/proveedores")
@PreAuthorize("isAuthenticated()")
public class ProveedorController {

  private final IProveedorService proveedorService;

  public ProveedorController(IProveedorService proveedorService) {
    this.proveedorService = proveedorService;
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping
  public ResponseEntity<ProveedorPageResponse> allProveedores(
      @ParameterObject @PageableDefault(sort = {"id"}) Pageable pageable) {
    ProveedorPageResponse response = proveedorService.allProveedores(pageable);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping("/{id}")
  public ResponseEntity<ProveedorResponse> findProveedorById(@PathVariable Long id) {
    ProveedorResponse response = proveedorService.findProveedorById(id);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PostMapping
  public ResponseEntity<ProveedorResponse> createProveedor(
      @RequestBody @Valid ProveedorRequest request) {
    ProveedorResponse response = proveedorService.createProveedor(request);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PutMapping("/{id}")
  public ResponseEntity<ProveedorResponse> updateProveedor(
      @PathVariable Long id, @RequestBody @Valid UpdateProveedorRequest request) {
    ProveedorResponse response = proveedorService.updateProveedor(id, request);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @DeleteMapping("/{id}")
  public ResponseEntity<GenericResponse> deleteProveedor(@PathVariable Long id) {
    GenericResponse response = proveedorService.deleteProveedor(id);
    return ResponseEntity.ok(response);
  }
}

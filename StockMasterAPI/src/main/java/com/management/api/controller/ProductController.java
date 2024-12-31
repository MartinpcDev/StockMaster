package com.management.api.controller;

import com.management.api.dto.request.ProductRequest;
import com.management.api.dto.request.UpdateProductRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProductPageResponse;
import com.management.api.dto.response.ProductResponse;
import com.management.api.persistence.model.ProductCategory;
import com.management.api.service.IProductService;
import jakarta.validation.Valid;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
@PreAuthorize("isAuthenticated()")
public class ProductController {

  private final IProductService productService;

  public ProductController(IProductService productService) {
    this.productService = productService;
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping
  public ResponseEntity<ProductPageResponse> allProducts(
      @RequestParam(required = false) ProductCategory category,
      @RequestParam(required = false) Long proveedorId,
      @PageableDefault(sort = {"id"}) Pageable pageable) {
    ProductPageResponse response;
    if (category != null) {
      response = productService.allProductsByCategory(category, pageable);
    } else if (proveedorId != null) {
      response = productService.allProductsByProveedor(proveedorId, pageable);
    } else {
      response = productService.allProducts(pageable);
    }

    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @GetMapping("/{id}")
  public ResponseEntity<ProductResponse> findProductById(@PathVariable Long id) {
    ProductResponse response = productService.findProductById(id);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PostMapping
  public ResponseEntity<ProductResponse> createProduct(@RequestBody @Valid ProductRequest request) {
    ProductResponse response = productService.createProduct(request);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @PutMapping("/{id}")
  public ResponseEntity<ProductResponse> updateProduct(
      @PathVariable Long id,
      @RequestBody @Valid UpdateProductRequest request) {
    ProductResponse response = productService.updateProduct(id, request);
    return ResponseEntity.ok(response);
  }

  @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
  @DeleteMapping("/{id}")
  public ResponseEntity<GenericResponse> deleteProduct(@PathVariable Long id) {
    GenericResponse response = productService.deleteProduct(id);
    return ResponseEntity.ok(response);
  }
}

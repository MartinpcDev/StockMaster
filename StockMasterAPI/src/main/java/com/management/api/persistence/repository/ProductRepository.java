package com.management.api.persistence.repository;

import com.management.api.persistence.model.Product;
import com.management.api.persistence.model.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

  Page<Product> findAllByCategoria(ProductCategory category, Pageable pageable);

  Page<Product> findAllByProveedorId(Long proveedorId, Pageable pageable);

  boolean existsByNombre(String nombre);
}

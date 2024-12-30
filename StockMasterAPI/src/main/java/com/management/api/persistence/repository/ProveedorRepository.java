package com.management.api.persistence.repository;

import com.management.api.persistence.model.Proveedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProveedorRepository extends JpaRepository<Proveedor, Long> {

  boolean existsByNombre(String nombre);

  boolean existsByTelefono(String telefono);

  boolean existsByEmailIgnoreCase(String email);
}

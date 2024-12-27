package com.management.api.persistence.repository;

import com.management.api.persistence.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}

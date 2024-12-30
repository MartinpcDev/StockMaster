package com.management.api.service;

import com.management.api.dto.request.ProductRequest;
import com.management.api.dto.request.UpdateProductRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProductPageResponse;
import com.management.api.dto.response.ProductResponse;
import com.management.api.persistence.model.ProductCategory;
import org.springframework.data.domain.Pageable;

public interface IProductService {

  ProductPageResponse allProducts(Pageable pageable);

  ProductPageResponse allProductsByCategory(ProductCategory category, Pageable pageable);

  ProductPageResponse allProductsByProveedor(Long proveedorId, Pageable pageable);

  ProductResponse findProductById(Long id);

  ProductResponse createProduct(ProductRequest request);

  ProductResponse updateProduct(Long id, UpdateProductRequest request);

  GenericResponse deleteProduct(Long id);
}

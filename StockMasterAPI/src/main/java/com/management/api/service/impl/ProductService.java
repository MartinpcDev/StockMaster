package com.management.api.service.impl;

import com.management.api.dto.request.ProductRequest;
import com.management.api.dto.request.UpdateProductRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProductPageResponse;
import com.management.api.dto.response.ProductResponse;
import com.management.api.exception.ProductNotFoundExcepticon;
import com.management.api.exception.ProveedorNotFoundExcepticon;
import com.management.api.mapper.PageMapper;
import com.management.api.mapper.ProductMapper;
import com.management.api.persistence.model.Product;
import com.management.api.persistence.model.ProductCategory;
import com.management.api.persistence.model.Proveedor;
import com.management.api.persistence.repository.ProductRepository;
import com.management.api.persistence.repository.ProveedorRepository;
import com.management.api.service.IProductService;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {

  private final ProductRepository productRepository;
  private final ProveedorRepository proveedorRepository;

  public ProductService(ProductRepository productRepository,
      ProveedorRepository proveedorRepository) {
    this.productRepository = productRepository;
    this.proveedorRepository = proveedorRepository;
  }

  @Override
  public ProductPageResponse allProducts(Pageable pageable) {
    Page<Product> productPage = productRepository.findAll(pageable);
    return PageMapper.toProductPageResponse(productPage);
  }

  @Override
  public ProductPageResponse allProductsByCategory(ProductCategory category, Pageable pageable) {
    Page<Product> productPage = productRepository.findAllByCategoria(category, pageable);
    return PageMapper.toProductPageResponse(productPage);
  }

  @Override
  public ProductPageResponse allProductsByProveedor(Long proveedorId, Pageable pageable) {
    proveedorRepository.findById(proveedorId)
        .orElseThrow(() -> new IllegalArgumentException("Proveedor no encontrado"));
    Page<Product> productPage = productRepository.findAllByProveedorId(proveedorId, pageable);
    return PageMapper.toProductPageResponse(productPage);
  }

  @Override
  public ProductResponse findProductById(Long id) {
    Product product = productRepository.findById(id)
        .orElseThrow(() -> new ProductNotFoundExcepticon("Producto no encontrado"));
    return ProductMapper.toProductResponse(product);
  }

  @Override
  @Transactional
  public ProductResponse createProduct(ProductRequest request) {
    if (productRepository.existsByNombre(request.nombre())) {
      throw new IllegalArgumentException("Producto ya existe");
    }
    Proveedor proveedor = proveedorRepository.findById(request.proveedorId())
        .orElseThrow(() -> new ProveedorNotFoundExcepticon("Proveedor no encontrado"));
    Product product = ProductMapper.toProduct(request);
    product.setProveedor(proveedor);
    Product createdProduct = productRepository.save(product);
    return ProductMapper.toProductResponse(createdProduct);
  }

  @Override
  @Transactional
  public ProductResponse updateProduct(Long id, UpdateProductRequest request) {
    Product product = productRepository.findById(id)
        .orElseThrow(() -> new ProductNotFoundExcepticon("Producto no encontrado"));
    if (request.proveedorId() != null) {
      Proveedor proveedor = proveedorRepository.findById(request.proveedorId())
          .orElseThrow(() -> new ProveedorNotFoundExcepticon("Proveedor no encontrado"));
      product.setProveedor(proveedor);
    }
    ProductMapper.updateProduct(product, request);
    Product updatedProduct = productRepository.save(product);
    return ProductMapper.toProductResponse(updatedProduct);
  }

  @Override
  @Transactional
  public GenericResponse deleteProduct(Long id) {
    Product product = productRepository.findById(id)
        .orElseThrow(() -> new ProductNotFoundExcepticon("Producto no encontrado"));
    Proveedor proveedor = product.getProveedor();
    proveedor.getProducts().remove(product);
    productRepository.delete(product);
    return new GenericResponse("Producto Correctamente eliminado");
  }
}

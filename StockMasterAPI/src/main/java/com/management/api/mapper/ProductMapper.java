package com.management.api.mapper;

import com.management.api.dto.request.ProductRequest;
import com.management.api.dto.request.UpdateProductRequest;
import com.management.api.dto.response.ProductOnlyResponse;
import com.management.api.dto.response.ProductResponse;
import com.management.api.persistence.model.Product;
import com.management.api.persistence.model.ProductCategory;
import java.util.List;

public class ProductMapper {

  public static ProductResponse toProductResponse(Product product) {
    if (product == null) {
      return null;
    }
    return new ProductResponse(
        product.getId(),
        product.getNombre(),
        product.getDescripcion(),
        product.getPrecio(),
        product.getStock(),
        product.getCategoria(),
        product.getFechaIngreso(),
        ProveedorMapper.toProveedorOnlyResponse(product.getProveedor())
    );
  }

  public static ProductOnlyResponse toProductOnlyResponse(Product product) {
    if (product == null) {
      return null;
    }
    return new ProductOnlyResponse(
        product.getId(),
        product.getNombre(),
        product.getDescripcion(),
        product.getPrecio(),
        product.getStock(),
        product.getCategoria(),
        product.getFechaIngreso()
    );
  }

  public static List<ProductOnlyResponse> toProductOnlyResponseList(List<Product> products) {
    return products.stream()
        .map(ProductMapper::toProductOnlyResponse)
        .toList();
  }

  public static List<ProductResponse> toProductResponseList(List<Product> products) {
    return products.stream()
        .map(ProductMapper::toProductResponse)
        .toList();
  }

  public static Product toProduct(ProductRequest productRequest) {
    if (productRequest == null) {
      return null;
    }
    Product product = new Product();
    product.setNombre(productRequest.nombre());
    product.setDescripcion(productRequest.descripcion());
    product.setPrecio(productRequest.precio());
    product.setStock(productRequest.stock());
    product.setCategoria(ProductCategory.valueOf(productRequest.categoria()));

    return product;
  }

  public static void updateProduct(Product oldProduct, UpdateProductRequest productRequest) {
    if (oldProduct != null && productRequest != null) {
      if (productRequest.nombre() != null) {
        oldProduct.setNombre(productRequest.nombre());
      }
      if (productRequest.descripcion() != null) {
        oldProduct.setDescripcion(productRequest.descripcion());
      }
      if (productRequest.precio() != null) {
        oldProduct.setPrecio(productRequest.precio());
      }
      if (productRequest.stock() != null) {
        oldProduct.setStock(productRequest.stock());
      }
      if (productRequest.categoria() != null) {
        oldProduct.setCategoria(ProductCategory.valueOf(productRequest.categoria()));
      }
    }
  }
}

package com.management.api.mapper;

import com.management.api.dto.request.ProductRequest;
import com.management.api.dto.request.UpdateProductRequest;
import com.management.api.dto.response.ProductResponse;
import com.management.api.persistence.model.Product;
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
        ProveedorMapper.toProveedorResponse(product.getProveedor())
    );
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
    product.setCategoria(productRequest.categoria());

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
        oldProduct.setCategoria(productRequest.categoria());
      }
    }
  }
}

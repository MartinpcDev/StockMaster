package com.management.api.mapper;

import com.management.api.dto.response.ProductPageResponse;
import com.management.api.dto.response.ProveedorPageResponse;
import com.management.api.dto.response.UsuarioPageResponse;
import com.management.api.persistence.model.Product;
import com.management.api.persistence.model.Proveedor;
import com.management.api.persistence.model.Usuario;
import org.springframework.data.domain.Page;

public class PageMapper {

  public static UsuarioPageResponse toUsuarioPageResponse(Page<Usuario> usuariosPage) {
    if (usuariosPage == null) {
      return null;
    }

    return new UsuarioPageResponse(
        UsuarioMapper.toUsuarioResponseList(usuariosPage.getContent()),
        usuariosPage.getPageable().getPageNumber(),
        usuariosPage.getPageable().getPageSize(),
        (int) usuariosPage.getTotalElements()
    );
  }

  public static ProveedorPageResponse toProveedorPageResponse(Page<Proveedor> proveedorPage) {
    if (proveedorPage == null) {
      return null;
    }

    return new ProveedorPageResponse(
        ProveedorMapper.toProveedorResponseList(proveedorPage.getContent()),
        proveedorPage.getPageable().getPageNumber(),
        proveedorPage.getPageable().getPageSize(),
        (int) proveedorPage.getTotalElements()
    );
  }

  public static ProductPageResponse toProductPageResponse(Page<Product> productPage) {
    if (productPage == null) {
      return null;
    }

    return new ProductPageResponse(
        ProductMapper.toProductResponseList(productPage.getContent()),
        productPage.getPageable().getPageNumber(),
        productPage.getPageable().getPageSize(),
        (int) productPage.getTotalElements()
    );
  }
}

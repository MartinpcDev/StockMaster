package com.management.api.mapper;

import com.management.api.dto.request.ProveedorRequest;
import com.management.api.dto.request.UpdateProveedorRequest;
import com.management.api.dto.response.ProveedorOnlyResponse;
import com.management.api.dto.response.ProveedorResponse;
import com.management.api.persistence.model.Proveedor;
import java.util.List;

public class ProveedorMapper {

  public static ProveedorResponse toProveedorResponse(Proveedor proveedor) {
    if (proveedor == null) {
      return null;
    }
    return new ProveedorResponse(
        proveedor.getId(),
        proveedor.getNombre(),
        proveedor.getDireccion(),
        proveedor.getTelefono(),
        proveedor.getEmail(),
        ProductMapper.toProductOnlyResponseList(proveedor.getProducts())
    );
  }

  public static ProveedorOnlyResponse toProveedorOnlyResponse(Proveedor proveedor) {
    if (proveedor == null) {
      return null;
    }
    return new ProveedorOnlyResponse(
        proveedor.getId(),
        proveedor.getNombre(),
        proveedor.getDireccion(),
        proveedor.getTelefono(),
        proveedor.getEmail()
    );
  }

  public static List<ProveedorResponse> toProveedorResponseList(List<Proveedor> proveedores) {
    return proveedores.stream()
        .map(ProveedorMapper::toProveedorResponse)
        .toList();
  }

  public static Proveedor toProveedor(ProveedorRequest request) {
    if (request == null) {
      return null;
    }

    Proveedor proveedor = new Proveedor();
    proveedor.setNombre(request.nombre());
    proveedor.setDireccion(request.direccion());
    proveedor.setTelefono(request.telefono());
    proveedor.setEmail(request.email());

    return proveedor;
  }

  public static void updateProveedor(Proveedor oldProveedor, UpdateProveedorRequest request) {
    if (oldProveedor != null && request != null) {
      if (request.nombre() != null) {
        oldProveedor.setNombre(request.nombre());
      }
      if (request.direccion() != null) {
        oldProveedor.setDireccion(request.direccion());
      }
      if (request.telefono() != null) {
        oldProveedor.setTelefono(request.telefono());
      }
      if (request.email() != null) {
        oldProveedor.setEmail(request.email());
      }
    }
  }
}

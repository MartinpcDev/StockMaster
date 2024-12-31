package com.management.api.service.impl;

import com.management.api.dto.request.ProveedorRequest;
import com.management.api.dto.request.UpdateProveedorRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProveedorPageResponse;
import com.management.api.dto.response.ProveedorResponse;
import com.management.api.exception.ProveedorNotFoundExcepticon;
import com.management.api.mapper.PageMapper;
import com.management.api.mapper.ProveedorMapper;
import com.management.api.persistence.model.Proveedor;
import com.management.api.persistence.repository.ProveedorRepository;
import com.management.api.service.IProveedorService;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProveedorService implements IProveedorService {

  private final ProveedorRepository proveedorRepository;

  public ProveedorService(ProveedorRepository proveedorRepository) {
    this.proveedorRepository = proveedorRepository;
  }

  @Override
  public ProveedorPageResponse allProveedores(Pageable pageable) {
    Page<Proveedor> proveedorPage = proveedorRepository.findAll(pageable);
    return PageMapper.toProveedorPageResponse(proveedorPage);
  }

  @Override
  public ProveedorResponse findProveedorById(Long id) {
    Proveedor proveedor = proveedorRepository.findById(id)
        .orElseThrow(() -> new ProveedorNotFoundExcepticon("Proveedor no encontrado"));
    return ProveedorMapper.toProveedorResponse(proveedor);
  }

  @Override
  @Transactional
  public ProveedorResponse createProveedor(ProveedorRequest request) {
    if (proveedorRepository.existsByNombre(request.nombre())
        || proveedorRepository.existsByTelefono(request.telefono())
        || proveedorRepository.existsByEmailIgnoreCase(request.email())) {
      throw new IllegalArgumentException("Proveedor ya existe");
    }

    Proveedor proveedor = ProveedorMapper.toProveedor(request);
    Proveedor createdProveedor = proveedorRepository.save(proveedor);
    return ProveedorMapper.toProveedorResponse(createdProveedor);
  }

  @Override
  @Transactional
  public ProveedorResponse updateProveedor(Long id, UpdateProveedorRequest request) {
    Proveedor proveedor = proveedorRepository.findById(id)
        .orElseThrow(() -> new ProveedorNotFoundExcepticon("Proveedor no encontrado"));
    ProveedorMapper.updateProveedor(proveedor, request);
    Proveedor updatedProveedor = proveedorRepository.save(proveedor);
    return ProveedorMapper.toProveedorResponse(updatedProveedor);
  }

  @Override
  @Transactional
  public GenericResponse deleteProveedor(Long id) {
    Proveedor proveedor = proveedorRepository.findById(id)
        .orElseThrow(() -> new ProveedorNotFoundExcepticon("Proveedor no encontrado"));
    proveedorRepository.delete(proveedor);
    return new GenericResponse("Proveedor Correctamente eliminado");
  }
}

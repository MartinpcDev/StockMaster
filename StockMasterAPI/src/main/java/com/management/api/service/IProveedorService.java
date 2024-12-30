package com.management.api.service;

import com.management.api.dto.request.ProveedorRequest;
import com.management.api.dto.request.UpdateProveedorRequest;
import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.ProveedorPageResponse;
import com.management.api.dto.response.ProveedorResponse;
import org.springframework.data.domain.Pageable;

public interface IProveedorService {

  ProveedorPageResponse allProveedores(Pageable pageable);

  ProveedorResponse findProveedorById(Long id);

  ProveedorResponse createProveedor(ProveedorRequest request);

  ProveedorResponse updateProveedor(Long id, UpdateProveedorRequest request);

  GenericResponse deleteProveedor(Long id);
}

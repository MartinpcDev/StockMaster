package com.management.api.controller;

import com.management.api.dto.response.GenericResponse;
import com.management.api.dto.response.UsuarioPageResponse;
import com.management.api.service.IAdminService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@PreAuthorize("isAuthenticated() and hasRole('ADMIN')")
public class AdminController {

  private final IAdminService adminService;

  public AdminController(IAdminService adminService) {
    this.adminService = adminService;
  }

  @GetMapping("/all-users")
  public ResponseEntity<UsuarioPageResponse> allUsers(
      @PageableDefault(sort = {"id"}) Pageable pageable) {
    System.out.println(pageable);
    return ResponseEntity.ok(adminService.findAllUsers(pageable));
  }
  
  @DeleteMapping("/delete-user/{userId}")
  public ResponseEntity<GenericResponse> deleteUser(@PathVariable Long userId) {
    return ResponseEntity.ok(adminService.deleteUser(userId));
  }
}

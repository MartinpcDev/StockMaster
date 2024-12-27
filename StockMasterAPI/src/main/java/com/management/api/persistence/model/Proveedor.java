package com.management.api.persistence.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "proveedores")
public class Proveedor {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false, unique = true)
  private String nombre;
  @Column(nullable = false)
  private String direccion;
  @Column(nullable = false, unique = true)
  private String telefono;
  @Column(nullable = false, unique = true)
  private String email;
  @OneToMany(mappedBy = "proveedor", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Product> products = new ArrayList<>();
}

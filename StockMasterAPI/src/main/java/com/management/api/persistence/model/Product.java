package com.management.api.persistence.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "productos")
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false, unique = true)
  private String nombre;
  @Column(nullable = false)
  private String descripcion;
  @Column(nullable = false)
  private Double precio;
  @Column(nullable = false)
  private Integer stock;
  @CreationTimestamp
  @Column(updatable = false, columnDefinition = "TIMESTAMP DEFAULT NOW()")
  private LocalDateTime fechaIngreso;
  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private ProductCategory categoria;
  @ManyToOne
  @JoinColumn(name = "proveedor_id", nullable = false)
  private Proveedor proveedor;
}

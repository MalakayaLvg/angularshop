import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { name: 'Produit 1', price: 10, stock: 20 },
    { name: 'Produit 2', price: 20, stock: 10 }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    if (product.stock > 0) {
      this.productService.updateStock(product.id!, product.stock - 1);
    }
  }
}

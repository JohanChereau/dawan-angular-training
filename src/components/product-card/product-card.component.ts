import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TechProduct } from '../../interfaces/tech-product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: TechProduct;
  @Output() productDeleted = new EventEmitter<never>();

  productService = inject(ProductService);
  protected auth = inject(AuthService);

  deleteProduct() {
    this.productService
      .delete(this.product.id)
      .subscribe(() => this.productDeleted.emit());
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected service = inject(ProductService);
  private route = inject(ActivatedRoute);
  protected auth = inject(AuthService);

  data = this.route.data.pipe(map(({ products }) => products));
}

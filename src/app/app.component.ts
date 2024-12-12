import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TechProduct } from '../interfaces/tech-product';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { HeaderComponent } from '../layouts/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

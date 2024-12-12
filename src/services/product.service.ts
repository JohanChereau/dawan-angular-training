import { Injectable } from '@angular/core';
import { AbstractService } from '../tools/abstract-service';
import { TechProduct } from '../interfaces/tech-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends AbstractService<TechProduct> {
  protected readonly ENDPOINT: string = '/products';
}

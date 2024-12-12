import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AbstractFormComponent } from '../../tools/abstract-form';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css'],
})
export class ProductEditorComponent extends AbstractFormComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    name: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    price: new FormControl(0, { validators: [Validators.required] }),
    stock: new FormControl(0, { validators: [Validators.required] }),
    category: new FormControl('', { validators: [Validators.required] }),
    imageUrl: new FormControl('', { validators: [Validators.required] }),
  });

  categories: string[] = [
    'Processor',
    'Motherboard',
    'Graphics Card',
    'RAM',
    'SSD',
    'Mouse',
    'Keyboard',
    'Headset',
    'Monitor',
    'Speaker',
    'External Storage',
    'Webcam',
    'Microphone',
    'Power Supply',
    'Laptop',
    'Smartphone',
    'Watch',
    'VR',
    'Charger',
  ];

  constructor(
    private service: ProductService,
    private router: Router,
    route: ActivatedRoute
  ) {
    super();

    route.data.subscribe(({ product }) => {
      if (product) this.form.patchValue(product);
      else
        this.form.reset({
          id: 0,
          description: '',
        });
    });
  }

  onSubmit$(): void {
    this.service[this.form.value.id ? 'update' : 'save'](
      this.form.value
    ).subscribe(() => this.router.navigate(['/home']));
  }
}

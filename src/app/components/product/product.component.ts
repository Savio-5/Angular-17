import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { Product } from '../../Types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor() { }

  @Input() product!: Product;
}

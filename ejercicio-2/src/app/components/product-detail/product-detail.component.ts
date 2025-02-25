import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product! : Product
}

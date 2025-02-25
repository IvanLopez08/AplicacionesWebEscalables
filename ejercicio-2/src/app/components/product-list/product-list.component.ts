import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, NgClass, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products : Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtUy34u0rPaiKlg1RU6lS9hJ7Z9ENbJ9vbg&s" },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0TuSFiUk0xW7T8Pqy5bZKLkrif43UmUPCw&s" },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, img: "https://m.media-amazon.com/images/I/71KNiKiMbiL._AC_UF894,1000_QL80_.jpg" },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, img: "https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg" },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, img: "https://m.media-amazon.com/images/I/61Q56A7UfNL.jpg" },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, img: "https://coolboxmx.vtexassets.com/arquivos/ids/159664/RAT001-MX.jpg?v=638618487082470000" },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, img: "https://www.3d4.com.mx/cdn/shop/files/LaserJetM111w_547x.jpg?v=1709947546" },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, img: "https://m.media-amazon.com/images/I/616gXw-WpQL.jpg" },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, img: "https://m.media-amazon.com/images/I/61LwJGI55jL._AC_UF894,1000_QL80_.jpg" },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, img: "https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg" },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, img: "https://http2.mlstatic.com/D_NQ_NP_868010-MLU70500935620_072023-O.webp" },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, img: "https://m.media-amazon.com/images/I/81YJvEdEkGL.jpg" },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, img: "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/224364a23/repetidor-router-wi-fi-6-ax1500-2-4-ghz-y-5-ghz-hasta-100-m-de-cobertura.jpg" },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, img: "https://m.media-amazon.com/images/I/71MfdgsWMFL.jpg" },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, img: "https://m.media-amazon.com/images/I/61yEHZXdi6L._AC_UF1000,1000_QL80_.jpg" },
  ]

  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}

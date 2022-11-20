import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList: any;
  // productList: Product[] = [
  //   {productId:'',
  //   categoryId: 0,
  //   productName: '',
  //   description: '',
  //   rating: '',
  //   price: '',
  //   productImg: '',
  //   isAvailable: false,
  //   color: '',
  //   reviews: 0}
  // ];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: data => {
        console.log(data);
        this.productList = data;
        console.log(this.productList);
        
      }
    })
  }

}

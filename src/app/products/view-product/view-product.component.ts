import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = 0
  productDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.productId = data['id'];
      console.log(this.productId);
      
      this.productService.viewProduct(this.productId).subscribe({
        next: data => {
          this.productDetails = data;
        },
        error: error => {
          console.log(error);
          
        }
      })

    })
  }

}

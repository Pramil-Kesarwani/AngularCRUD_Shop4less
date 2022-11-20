import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private productService:ProductsService) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      this.productId = data['id'];
      console.log(this.productId);

      // api for getting the existing data for a product. after getting this then we will be able to update the existing data.
      this.productService.viewProduct(this.productId).subscribe({
        next: data => {
          this.productDetails = data;
          console.log("productList Value in update component:",this.productDetails);
          
        },
        error: error => {
          console.log(error);
          
        }
      })

    });
  }

  updateProduct(form:any) {
    console.log("New form value : ",form.value);
    
    // we have option to pass value as a object of all the forms attribute, or we can directly send the "form.value" as an object.
    const updateProduct = {
      
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: form.value.product_available,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    } 
    
    this.productService.updateProduct(this.productId, updateProduct).subscribe({
      next: data => {
        console.log(data);
        
      },
      error: error => {
        console.log(error);
        
      }
    })

  }
}

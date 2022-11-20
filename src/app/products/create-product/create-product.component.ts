import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form:any) {
    console.log(form.value);

    // creating a new json object.
    let newProduct = {

      // id field will be auto generated and unique, but we can stubbed it also , then it will store stubbed id.
      // id: 7,  
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews:form.value.product_reviews
    }

    console.log("newProduct value",newProduct);
    

    this.productService.createProduct(newProduct).subscribe({
      next: data => {
        console.log(data);
        
      },
      error: error => {
        console.log(error);
        
      }
    })

  }

}

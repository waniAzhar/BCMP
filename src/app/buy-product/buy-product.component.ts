import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from '../_model/order-details.model';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

productDetails: Product[] = [];

  orderDetails: OrderDetails ={
    emailId: '',
    orderAmount: 0,
    orderProductQuantityList: []
  }
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.productDetails = this.activatedRoute.snapshot.data['productDetails'];

    this.productDetails.forEach(
      x => this.orderDetails.orderProductQuantityList.push(
        {productId: x.productId, quantity: 1}
      )
    );
    //console.log(this.productDetails);
    //console.log(this.orderDetails);
  }


  getCalculatedTotal(productId,productDiscountedPrice){

    return productDiscountedPrice+ (productDiscountedPrice*10/100);

  }

  public placeOrder(orderForm: NgForm){

    this.productService.placeOrder(this.orderDetails).subscribe(
      (resp) => {
        //console.log(resp);
        //orderForm.reset();
        this.router.navigate(["/apps"]);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  

}

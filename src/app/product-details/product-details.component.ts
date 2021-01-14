import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  fuck;
  /* ... */
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }
  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.fuck = products.find(fuck => fuck.id === productIdFromRoute);
}
    addToCart() {    
    this.cartService.addToCart(this.fuck);
    window.alert('Your product has been added to the cart!');
  }

}
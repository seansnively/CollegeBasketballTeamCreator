import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  items;
  cartService1; //idk if its angular or stackblitz but without this variabale cartService methods can only be called like 10% of the time
  checkoutForm;
  teamName;
  constructor(private cartService: CartService, private formBuilder: FormBuilder,) {
    this.cartService1 = cartService;
    this.items = this.cartService1.getItems();
    console.log(this.items[0]);
    this.checkoutForm = this.formBuilder.group({
      name: 'My Team'
    });
   }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.teamName = customerData.name;
    console.log(this.teamName);
    this.items = this.cartService1.clearCart();
    this.checkoutForm.reset();
  }
}
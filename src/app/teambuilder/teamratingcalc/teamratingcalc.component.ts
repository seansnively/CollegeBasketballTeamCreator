import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-teamratingcalc',
  templateUrl: './teamratingcalc.component.html',
  styleUrls: ['./teamratingcalc.component.css']
})
export class TeamratingcalcComponent implements OnInit {
  names = '';
  constructor(private cartService: CartService) { 
    for(let player of this.cartService.items){
      this.names += player.name + ' ';
    }
  }

  ngOnInit() {

  }



}
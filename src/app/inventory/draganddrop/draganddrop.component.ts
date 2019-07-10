import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { players } from '../../players';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css']
})
export class DraganddropComponent implements OnInit {
  myteamsize;
  myteamprevsize;
  cartService1; //idk if its angular or stackblitz but without this variabale cartService methods can only be called like 10% of the time
  myteam = [
  ];

  players = [
  ];

  constructor(private cartService: CartService) {
    this.cartService1 = cartService;
    
    for(let player of players){
      this.players.push(player);
    }
    
  }

  ngOnInit() {
  }

  onPrevTeam(){
    this.myteam = this.cartService.previtems;
    for(let player of this.myteam){
      this.cartService1.addToCart(player);
      var index = this.players.indexOf(player);
      this.players.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    //get previous team size
    this.myteamprevsize = this.myteam.length;
    
    //perform drag and drop
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    //get current team size
    this.myteamsize = this.myteam.length;
    var player; 

    if(this.myteamsize > this.myteamprevsize){
      player = this.myteam[event.currentIndex];
      console.log(player.name);
      console.log(event.currentIndex);
      this.cartService1.addToCart(player);
    }
    else if(this.myteamsize < this.myteamprevsize){
      player = this.players[event.currentIndex];
      console.log(player.name);
      console.log(event.currentIndex);
      this.cartService1.removeFromCart(player);
    }
  }
}

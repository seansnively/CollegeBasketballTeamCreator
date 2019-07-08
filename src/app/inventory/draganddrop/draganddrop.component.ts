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

  

  drop(event: CdkDragDrop<string[]>) {
    this.myteamprevsize = this.myteam.length;
    var player = event.previousContainer.data;
    console.log(player);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.myteamsize = this.myteam.length;
    for (let player of this.myteam){
      //console.log(player.name);
    }

    console.log(this.myteamsize);
    console.log(this.myteamprevsize);
    
  }
}

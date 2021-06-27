import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Ingridient } from '../Shared/Ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingridients: Ingridient[] = [
    new Ingridient("Apple",10),
    new Ingridient("Tomato",20)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addingridients(ingridient:Ingridient) {
    this.ingridients.push(ingridient);
  }

}

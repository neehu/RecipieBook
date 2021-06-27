import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipeItem:Recipie;
@Output() onRecipieItemClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipieItemClicked(){
    this.onRecipieItemClick.emit();
  }
}

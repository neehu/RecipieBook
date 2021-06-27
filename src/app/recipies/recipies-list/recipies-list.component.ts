import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie("Test Recipie","THis is for testing",
              "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"),
              new Recipie("Another Test Recipie","THis is for testing",
              "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg")
]
@Output() selectedRecipie = new EventEmitter<Recipie>();

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipieDetails(recipieClicked:Recipie)
  {
    this.selectedRecipie.emit(recipieClicked);
  }

}

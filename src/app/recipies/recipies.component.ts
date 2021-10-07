import { Component, DoCheck } from "@angular/core";
import { Recipie } from "./recipie.model";
import { RecipieService } from "./recipie.service";

@Component({
    selector:'app-recipies',
    templateUrl:'./recipies.component.html',
    styleUrls:['./recipies.component.css'],
})

export class Recipies {

    selectedRecipe:Recipie;
    constructor(private service:RecipieService){
    }

    ngOnInit(): void {

      }
}
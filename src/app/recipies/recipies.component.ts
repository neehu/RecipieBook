import { Component } from "@angular/core";
import { Recipie } from "./recipie.model";

@Component({
    selector:'app-recipies',
    templateUrl:'./recipies.component.html',
    styleUrls:['./recipies.component.css'],
})

export class Recipies {
selectedRecipe:Recipie;

    assignRecipieDetails(selectedRecipe:Recipie)
    {
        this.selectedRecipe = selectedRecipe;
    }
}
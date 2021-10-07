import { Recipie } from "./recipie.model";
import {Injectable} from '@angular/core';
import { Ingridient } from "../Shared/Ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipieService {
  private  recipies: Recipie[] = [
        new Recipie("Test Recipie","THis is for testing",
                  "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg",
                  [ new Ingridient("Apple",10), new Ingridient("Orange",20)],0),
                  new Recipie("Another Test Recipie","THis is for testing",
                  "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg",
                  [new Ingridient("Apple",10), new Ingridient("Orange",20)],1)
    ]
    constructor(private shoppinList:ShoppingListService){}

    recipieChange = new Subject<Recipie[]>();
     getRecipies(){
        return this.recipies.slice();
    }

    addToShoppingList(ingridient:Ingridient[]){
        this.shoppinList.addIngridients(ingridient);
    }


    onEditRecipie(id:number){

    }

    getRecipieByIndex(index:number){
        return this.recipies[index];
    }

    onAddRecipie(recipie:Recipie){
        this.recipies.push(recipie);
        this.recipieChange.next(this.recipies.slice())
    }

    onUpdateRecipie(i:number,recipie:Recipie){
        this.recipies[i] = recipie;
        this.recipieChange.next(this.recipies.slice())
    }

    deleteRecipie(id:number){
        this.recipies.splice(id,1);
        this.recipieChange.next(this.recipies.slice())
    }
}
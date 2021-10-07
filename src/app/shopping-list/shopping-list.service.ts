import { Ingridient } from "../Shared/Ingridient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    private ingridients: Ingridient[] = [
        new Ingridient("Apple",10),
        new Ingridient("Tomato",20)
      ]

    onIngridientsChanged = new Subject<Ingridient[]>();
    onIngridientSelected = new Subject<number>();

    getingridients(){
       return this.ingridients.slice();
   }

   onAdd(ingridient:Ingridient){
       this.ingridients.push(ingridient);
       this.onIngridientsChanged.next(this.ingridients.slice());
   }

   addIngridients(ingridients:Ingridient[]){
       this.ingridients.push(...ingridients);
       this.onIngridientsChanged.next(this.ingridients.slice());
   }

   onEditingridient(index:number){
       this.onIngridientSelected.next(index);
   }

   onEdit(ingridient:Ingridient,index:number){
       this.ingridients[index] = ingridient;
       this.onIngridientsChanged.next(this.ingridients.slice());
   }

   deleteIngridient(index:number){
       this.ingridients.splice(index,1);
       this.onIngridientsChanged.next(this.ingridients.slice());
   }

   getIngridient(index:number){
       return this.ingridients[index];
   }
}
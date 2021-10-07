import { Component,Input,OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingridient } from 'src/app/Shared/Ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm') form:NgForm;
  editMode = false;
  editedItemIndex:number;
  ingridient:Ingridient;

  constructor(private service:ShoppingListService) { }

  ngOnInit(): void {
   this.service.onIngridientSelected.subscribe(data=>{
     this.editMode = true;
     this.editedItemIndex =data;
     let ingridient = this.service.getIngridient(data);
     this.ingridient = ingridient;
     this.form.form.patchValue({
       'name' : ingridient.name,
       'amount' : ingridient.amount
     })
   })
  }

  addIngridient(name,amount){
    if(this.editMode)
    {
      this.service.onEdit(new Ingridient(name,amount),this.editedItemIndex);
      this.editMode = false;
    }
    else {
      this.service.onAdd(new Ingridient(name,amount));
    }
}

deleteIngridient(){
  this.service.deleteIngridient(this.editedItemIndex);
  this.onClear();
}

onSubmit() {
  let name = this.form.value.name;
  let amount = this.form.value.amount;
  this.addIngridient(name,amount)
 this.onClear();
}

onClear() {
  this.form.reset();
  this.editMode = false;
}
}

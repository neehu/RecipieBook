import { Component,OnInit, Output,
        EventEmitter,ViewChild,
        ElementRef} from '@angular/core';
import { Ingridient } from 'src/app/Shared/Ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() onAdd = new EventEmitter<Ingridient>();

  constructor() { }
  ngOnInit(): void {
  }

  addIngridient(){
  this.onAdd.emit(new Ingridient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
}
}

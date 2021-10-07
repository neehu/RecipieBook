import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data } from '@angular/router';
import { Ingridient } from '../Shared/Ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingridients:Ingridient[] = [];
selectedIndex:number;
  constructor(private activatedRoute:ActivatedRoute,private service:ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.activatedRoute.snapshot.data["ingridients"];
    this.service.onIngridientsChanged.subscribe((data)=> {
      this.ingridients = data;
    })

  }
  
  onEditItem(i:number){
      this.service.onEditingridient(i);
  }
}

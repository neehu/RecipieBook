import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Ingridient } from 'src/app/Shared/Ingridient.model';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  constructor(private service:RecipieService,
            private activatedRoute:ActivatedRoute,
            private router:Router) { }

selectedRecipie:Recipie;

  ngOnInit(): void {
let id = this.activatedRoute.snapshot.params['id'];
this.selectedRecipie = this.service.getRecipieByIndex(id);
this.activatedRoute.params.subscribe((data)=> {
  this.selectedRecipie = this.service.getRecipieByIndex(data['id']);
})
}
sendToShoppingList() {
  this.service.addToShoppingList(this.selectedRecipie.ingridients);
  this.router.navigate(['shopping-list']);
}

onEdit(){
  this.service.onEditRecipie(this.selectedRecipie.id);
}

deleteRecipie(){
this.service.deleteRecipie(this.selectedRecipie.id);
this.router.navigateByUrl('recipies');
}


}

import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipie } from '../../recipie.model';
import { RecipieService } from '../../recipie.service';
import { RecipieDataResolver } from './recipie-resolver.service';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit,RecipieDataResolver {
@Input() recipeItem:Recipie;
@Input() id : number;
  constructor(private route :Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
  }

  naviGateTo(){
    this.route.navigate(['recipie-detail',this.id],{relativeTo:this.activatedRoute});
  }
  dataResolver() : Recipie | Observable<Recipie> | Promise<Recipie>{
    return this.recipeItem;
  }
}

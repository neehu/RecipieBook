import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
recipies:Recipie[]=[];
  constructor(private service:RecipieService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipies = this.service.getRecipies();
    this.service.recipieChange.subscribe(data => {
      this.recipies = data;
    })
  }

  naviageteTo(i){
    this.router.navigate(['recipie-detail',i],{relativeTo:this.activatedRoute})
  }
}

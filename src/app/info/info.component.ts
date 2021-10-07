import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  message:string;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.router.data.subscribe((data:Data)=>{
      this.message = data["message"];
    })
  }

}

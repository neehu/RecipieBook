import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Ingridient } from 'src/app/Shared/Ingridient.model';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  @Input() id: number;
  edit: boolean = false;
  recipieToEdit: Recipie;
  recipieEditForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
     private service: RecipieService,
     private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: Data) => {
      this.id = +data['id'];
      this.edit = data['id'] != null;
      this.initForm();
    })
  }


  private initForm() {
    let recipieName = '';
    let imagePath = '';
    let description = '';
    let recipieIngridients = new FormArray([])

    if (this.edit) {
      let recipie = this.service.getRecipieByIndex(this.id);
      recipieName = recipie.name;
      imagePath = recipie.imageURL;
      description = recipie.description;

      if (recipie['ingridients']) {
        for (let ingridient of recipie.ingridients) {
          recipieIngridients.push(new FormGroup({
            'name': new FormControl(ingridient.name, Validators.required),
            'amount': new FormControl(ingridient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }

    }
    this.recipieEditForm = new FormGroup({
      'name': new FormControl(recipieName, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imageURL': new FormControl(imagePath, Validators.required),
      'ingridients': recipieIngridients
    });
  }

  getIngridients() {
    return (<FormArray>this.recipieEditForm.get('ingridients')).controls
  }

  onAddIngridient() {
    (<FormArray>this.recipieEditForm.get('ingridients')).push(new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    ))
  }

  onSubmit() {

    if(this.edit)
    {
      this.service.onUpdateRecipie(this.id,this.recipieEditForm.value);
    }
    else {
      this.service.onAddRecipie(this.recipieEditForm.value);
    }
   this.clearForm();
    
  }

  clearForm(){
    this.router.navigate(['../'],{relativeTo:this.activatedRoute})
  }

  removeRow(i:number) {
    (<FormArray>this.recipieEditForm.get('ingridients')).controls.splice(i,1);
  }
}

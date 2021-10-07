import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./info/info.component";
import { RecipieDetailComponent } from "./recipies/recipie-detail/recipie-detail.component";
import { RecipieEditComponent } from "./recipies/recipie-edit/recipie-edit.component";
import { RecipieResolver } from "./recipies/recipies-list/recipies-item/recipie-resolver.service";
import { RecipiesItemComponent } from "./recipies/recipies-list/recipies-item/recipies-item.component";
import { Recipies } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListResolver } from "./shopping-list/shopping-resolver";

export const routes : Routes = [
    {path:'',redirectTo:'recipies',pathMatch:'prefix'},
    {path:'recipies',component:Recipies,children:[
    {path:'new',component:RecipieEditComponent},
    {path:'recipie-detail/:id', component:RecipieDetailComponent},
    {path:'recipie-detail/:id/edit', component:RecipieEditComponent},
    {path:'',component:InfoComponent, data:{message:'Please selecta a recipie'}}
    ]},
    {path:'shopping-list',component:ShoppingListComponent,resolve:{ingridients:ShoppingListResolver}}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {
}
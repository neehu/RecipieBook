import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipiesItemComponent } from './recipies/recipies-list/recipies-item/recipies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Recipies } from './recipies/recipies.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { Recipie } from './recipies/recipie.model';
import { RecipieResolver } from './recipies/recipies-list/recipies-item/recipie-resolver.service';
import { RecipieService } from './recipies/recipie.service';
import { ShoppingListResolver } from './shopping-list/shopping-resolver';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Recipies,
    RecipieDetailComponent,
    RecipiesListComponent,
    RecipiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService,
              RecipieResolver,
              RecipieService,
              ShoppingListResolver],
  bootstrap: [AppComponent,RecipieService]
})
export class AppModule { }

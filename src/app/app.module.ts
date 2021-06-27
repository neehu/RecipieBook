import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopppingListComponent } from './shopping/shoppping-list/shoppping-list.component';
import { ShopppingListEditComponent } from './shopping/shoppping-list-edit/shoppping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipiesItemComponent } from './recipies/recipies-list/recipies-item/recipies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Recipies } from './recipies/recipies.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShopppingListComponent,
    ShopppingListEditComponent,
    HeaderComponent,
    Recipies,
    RecipieDetailComponent,
    RecipiesListComponent,
    RecipiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

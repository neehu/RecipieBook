import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Ingridient } from "../Shared/Ingridient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class ShoppingListResolver implements Resolve<Ingridient[]> {
    constructor(private service:ShoppingListService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Ingridient[] | Observable<Ingridient[]> | Promise<Ingridient[]> {
       return this.service.getingridients();
    }

}
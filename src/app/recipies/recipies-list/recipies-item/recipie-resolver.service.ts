import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipie } from "../../recipie.model";
import { RecipieService } from "../../recipie.service";

export interface RecipieDataResolver {
    dataResolver:()=> Observable<Recipie> | Promise<Recipie> | Recipie ;
}
@Injectable()
export class RecipieResolver implements Resolve<Recipie>  {

    constructor(private service:RecipieService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Recipie | Observable<Recipie> | Promise<Recipie> {
       return this.service.getRecipieByIndex(+route.params["id"]);
    }
}
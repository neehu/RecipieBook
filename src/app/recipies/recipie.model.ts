import { Ingridient } from "../Shared/Ingridient.model";

export class Recipie {
    public id :number;
    public name: string;
    public description: string;
    public imageURL : string;
    public ingridients:Ingridient[];

    constructor(name:string,desc:string,imagePath:string,ingridients:Ingridient[],id:number){
        this.name = name;
        this.description = desc;
        this.imageURL = imagePath;
        this.ingridients = ingridients;
    }
}
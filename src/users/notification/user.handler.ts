import { EventsHandler } from "@nestjs/cqrs";


@EventsHandler(CompanyRegistered)
export class CompanyRegisteredHandler{
    constructor(){}

    async handle(event: CompanyRegisteredHandler){
        console.log(event);
    }
}

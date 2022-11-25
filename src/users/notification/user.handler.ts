import { EventsHandler } from "@nestjs/cqrs";
import { CompanyRegistered } from "../domain/events/company-registered.event";


@EventsHandler(CompanyRegistered)
export class CompanyRegisteredHandler{
    constructor(){}

    async handle(event: CompanyRegisteredHandler){
        console.log(event);
    }
}

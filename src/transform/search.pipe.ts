import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "search"})
export class SearchPipe implements PipeTransform {
    public transform<T>(value: T[], property: string, query: string): T[] {
        if(!value || !property || !query) {
            return value;
        }
        return value.filter(element => String(element[property]).search(new RegExp(query, "gi")) > -1)
    }
}

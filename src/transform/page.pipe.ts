import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "page"})
export class PagePipe implements PipeTransform {
    public transform<T>(value: T[], num: number, size: number): T[] {
        if(!value) {
            return value;
        }
        return value.slice(size * num, size * (num + 1));
    }
}

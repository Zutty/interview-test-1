import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "page"})
export class PagePipe implements PipeTransform {
    public transform<T>(value: T[], currentPage: number, size: number): T[] {
        if(!value) {
            return value;
        }

        // Sanity check to prevent the page going off the end of the array
        const inner = Math.max(0, value.length - size);
        const start = Math.min(size * currentPage, inner);
        const end = Math.min(size * (currentPage + 1), value.length);

        return value.slice(start, end);
    }
}

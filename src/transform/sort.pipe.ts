import {Pipe, PipeTransform} from "@angular/core";

/*
 * Allow nested property access
 * Credit https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
 */
const get = (root: any, prop: string) => prop.split(".")
    .reduce((obj, property) => obj && obj[property], root);

const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);

const dirValue = (dir: "asc" | "desc") => dir === "asc" ? 1 : -1;

@Pipe({name: "sort"})
export class SortPipe implements PipeTransform {
    public transform<T>(value: T[], propertyPath: string, dir: "asc" | "desc" = "asc"): T[] {
        if (!value || !propertyPath) {
            return value;
        }

        return [...value].sort((a, b) => compare(get(a, propertyPath), get(b, propertyPath)) * dirValue(dir));
    }
}

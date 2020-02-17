import {Component, Input} from "@angular/core";

export type Sort = {
    sortBy: string;
    sortDir: "asc" | "desc";
}

@Component({
    selector: "sort",
    template: `
        <div class="sort">
            <div class="sortParams">
                <button (click)="toggleSort('name')" [ngClass]="{active: sort.sortBy == 'name'}">City <i [ngClass]="['sort-alpha', nextDir('name')]"></i></button>
                <button (click)="toggleSort('main.temp')" [ngClass]="{active: sort.sortBy == 'main.temp'}">Temp. <i [ngClass]="['sort-numeric', nextDir('main.temp')]"></i></button>
            </div>
        </div>`,
    styleUrls: ["sort.component.scss"]
})
export class SortComponent {
    @Input()
    public sort: Sort;

    public nextDir = (param: string) => this.sort.sortBy === param && this.sort.sortDir === "asc" ? "desc" : "asc";

    public toggleSort(param: string) {
        if(this.sort.sortBy === param) {
            this.sort.sortDir = this.sort.sortDir === "asc" ? "desc" : "asc";
        } else {
            this.sort.sortBy = param;
            this.sort.sortDir = "asc";
        }
    }
}

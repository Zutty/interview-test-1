import {Component, Input} from "@angular/core";

const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

const range = (n: number) => {
    const arr = Array(n);
    for(let idx = 0; idx < n; idx++) {
        arr[idx] = idx;
    }
    return arr;
};

export type PageData = {
    total: number;
    size: number;
    current: number;
}

/*
 * Prev/next SVG icons shamelessly stolen from Material UI
 */
@Component({
    selector: "pages",
    template: `
        <div class="pages">
            <div class="sizes">
                <button *ngFor="let size of [5, 10, 20]" (click)="setSize(size)"
                        [ngClass]="{active: size == paging.size}">{{size}}</button>
            </div>
            <div class="pips">
                <i *ngFor="let page of pages()" (click)="goToPage(page)"
                   [ngClass]="{current: page == paging.current}"></i>
            </div>
            <div class="prevnext">
                <button (click)="goToPage(paging.current - 1)" [ngClass]="{active: paging.current > 0}">
                    <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </svg>
                </button>
                <button (click)="goToPage(paging.current + 1)" [ngClass]="{active: paging.current < lastPage()}">
                    <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                </button>
            </div>
        </div>`,
    styleUrls: ["pagination.component.scss"]
})
export class PaginationComponent {

    @Input()
    public paging: PageData;

    public lastPage = () => Math.floor(this.paging.total / this.paging.size);

    public pages = () => range(this.lastPage() + 1);

    public setSize(size: number): void {
        this.paging.current = Math.floor(this.paging.current * this.paging.size / size);
        this.paging.size = size;
    }

    public goToPage(page: number): void {
        this.paging.current = clamp(page, 0, this.lastPage());
    }
}

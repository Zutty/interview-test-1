import {Component, Input, OnInit} from "@angular/core";
import {WeatherData} from "../service/open-weather.service";
import {Observable} from "rxjs";
import {PageData} from "./pagination.component";
import {Sort} from "./sort.component";

@Component({
    selector: "cities-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"]
})
export class TableComponent implements OnInit {
    @Input()
    public cities: Observable<WeatherData[]>;

    public sort: Sort = {
        sortBy: "name",
        sortDir: "asc"
    };

    public paging: PageData = {
        current: 0,
        size: 10,
        total: 0
    };

    public ngOnInit(): void {
        console.log("init");
        this.cities.subscribe(arr => {this.paging.total = arr.length;console.log("YAY")});
    }
}

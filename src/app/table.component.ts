import {Component, Input, OnInit} from "@angular/core";
import {WeatherData} from "../service/open-weather.service";
import {Observable} from "rxjs";
import {PageData} from "./pagination.component";
import {Filter} from "./filter.component";

@Component({
    selector: "cities-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"]
})
export class TableComponent {
    @Input()
    public cities: Observable<WeatherData[]>;

    public filter: Filter = {
        sortBy: "name",
        sortDir: "asc"
    };

    public paging: PageData = {
        current: 0,
        size: 10,
        total: 0
    };
}

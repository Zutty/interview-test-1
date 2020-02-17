import {Component, Input} from "@angular/core";
import {WeatherData} from "../service/open-weather.service";
import {Observable} from "rxjs";

@Component({
    selector: "cities-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"]
})
export class TableComponent {
    @Input()
    public cities: Observable<WeatherData[]>;
}

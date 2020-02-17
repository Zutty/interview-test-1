import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {WeatherData} from "../service/open-weather.service";

@Component({
    selector: "graph",
    template: `<h2>Average Temperature</h2>
    <div class="graph">
        <div class="mean" [ngStyle]="{height: meanTemp / maxTemp * 100 + '%'}">
            <span class="temp">{{meanTemp | number:"1.0-0"}}</span>
        </div>
        <div class="bar" *ngFor="let city of cities | async" [ngStyle]="{height: city.main.temp / maxTemp * 100 + '%'}">
            <span class="temp">{{city.main.temp | number:"1.0-0"}}</span>
            <span class="name">{{city.name}}</span>
        </div>
    </div>`,
    styleUrls: ["graph.component.scss"]
})
export class GraphComponent implements OnInit {
    @Input()
    public cities: Observable<WeatherData[]>;

    public maxTemp: number;
    public meanTemp: number;

    public ngOnInit(): void {
        this.cities.subscribe(cities => {
            let temps = cities.map(city => city.main.temp);
            this.maxTemp = Math.max.apply(Math, temps);
            this.meanTemp = temps.reduce((a, b) => a + b) / cities.length;
        });
    }
}

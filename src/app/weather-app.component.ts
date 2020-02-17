import {Component, OnInit} from "@angular/core";
import {OpenWeatherService, WeatherData} from "../service/open-weather.service";
import {Observable} from "rxjs";

@Component({
    selector: "weather-app",
    templateUrl: "weather-app.component.html",
    styleUrls: ["./weather-app.component.scss"]
})
export class WeatherAppComponent implements OnInit {

    public cities:Observable<WeatherData[]>;

    constructor(private openWeatherService: OpenWeatherService) {
    }

    public ngOnInit(): void {
        this.cities = this.openWeatherService.britishCities();
    }
}

import {Component, OnInit} from "@angular/core";
import {OpenWeatherService, WeatherData} from "../service/open-weather.service";

@Component({
    selector: "weather-app",
    templateUrl: "weather-app.component.html",
    styleUrls: ["./weather-app.component.scss"]
})
export class WeatherAppComponent implements OnInit {

    public weather:WeatherData;

    constructor(private openWeatherService: OpenWeatherService) {
    }

    public ngOnInit(): void {
        this.openWeatherService.city("Cambridge").subscribe(data => this.weather = data);
    }
}

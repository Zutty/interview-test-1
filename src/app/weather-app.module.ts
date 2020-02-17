import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WeatherAppComponent} from "./weather-app.component";
import {OpenWeatherService} from "../service/open-weather.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    bootstrap: [WeatherAppComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [WeatherAppComponent],
    providers: [OpenWeatherService]
})
export class WeatherAppModule {
}

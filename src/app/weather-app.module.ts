import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WeatherAppComponent} from "./weather-app.component";

@NgModule({
    bootstrap: [WeatherAppComponent],
    imports: [BrowserModule],
    declarations: [WeatherAppComponent]
})
export class WeatherAppModule {
    constructor() {
    }
}

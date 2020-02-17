import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WeatherAppComponent} from "./weather-app.component";
import {OpenWeatherService} from "../service/open-weather.service";
import {HttpClientModule} from "@angular/common/http";
import {TableComponent} from "./table.component";
import {PagePipe} from "../transform/page.pipe";
import {PaginationComponent} from "./pagination.component";

@NgModule({
    bootstrap: [WeatherAppComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        PagePipe,
        PaginationComponent,
        TableComponent,
        WeatherAppComponent
    ],
    providers: [OpenWeatherService]
})
export class WeatherAppModule {
}

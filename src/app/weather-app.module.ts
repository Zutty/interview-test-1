import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WeatherAppComponent} from "./weather-app.component";
import {OpenWeatherService} from "../service/open-weather.service";
import {HttpClientModule} from "@angular/common/http";
import {TableComponent} from "./table.component";
import {PagePipe} from "../transform/page.pipe";
import {PaginationComponent} from "./pagination.component";
import {SortPipe} from "../transform/sort.pipe";
import {FilterComponent} from "./filter.component";
import {SearchPipe} from "../transform/search.pipe";
import {FormsModule} from "@angular/forms";
import {GraphComponent} from "./graph.component";

@NgModule({
    bootstrap: [WeatherAppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        PagePipe,
        PaginationComponent,
        FilterComponent,
        GraphComponent,
        SearchPipe,
        SortPipe,
        TableComponent,
        WeatherAppComponent
    ],
    providers: [OpenWeatherService]
})
export class WeatherAppModule {
}

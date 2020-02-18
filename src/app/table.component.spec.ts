import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TableComponent} from "./table.component";
import {By} from "@angular/platform-browser";
import {PagePipe} from "../transform/page.pipe";
import {PaginationComponent} from "./pagination.component";
import {FilterComponent} from "./filter.component";
import {SearchPipe} from "../transform/search.pipe";
import {SortPipe} from "../transform/sort.pipe";
import {OpenWeatherService, WeatherData} from "../service/open-weather.service";
import {FormsModule} from "@angular/forms";
import {Observable, of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";

const cities = (...names: string[]) => names.map((name: string): WeatherData => {
    return {
        name: name,
        coord: {lon: 1, lat: 1},
        weather: [{id: 1, main: "", description: "", icon: ""}],
        base: "",
        main: {
            temp: 1, feels_like: 1, pressure: 1, humidity: 1, temp_min: 1, temp_max: 1, sea_level: 1, grnd_level: 1
        },
        wind: {speed: 1, deg: 1},
        clouds: {all: 1},
        rain: {"1h": 1, "3h": 1},
        snow: {"1h": 1, "3h": 1},
        dt: 1,
        sys: {type: 1, id: 1, message: 1, country: "", sunrise: 1, sunset: 1},
        timezone: 1,
        id: 1,
        cod: 1
    };
});

describe("TableComponent", () => {
    let fixture: ComponentFixture<TableComponent>;
    let openWeatherServiceStub;

    function typeInQuery(query: string) {
        const searchInput = fixture.nativeElement.querySelector('input[type=text]');
        searchInput.value = query;
        searchInput.dispatchEvent(new Event("input"));
        fixture.detectChanges();
        return fixture.whenStable()
    }

    beforeEach(async(() => {
        return TestBed
            .configureTestingModule({
                imports: [
                    FormsModule,
                    HttpClientTestingModule
                ],
                declarations: [
                    PagePipe,
                    PaginationComponent,
                    FilterComponent,
                    SearchPipe,
                    SortPipe,
                    TableComponent,
                ],
                providers: [
                    {provide: OpenWeatherService, useValue: openWeatherServiceStub}
                ]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TableComponent);
            })
    }));

    it("should not page the list if there are less than 10 cities", () => {
        openWeatherServiceStub = {
            britishCities(zoom: number): Observable<WeatherData[]> {
                return of(cities("Sheffield", "Cambridge", "London"));
            }
        };

        fixture.detectChanges();
        let element = fixture.debugElement.query(By.css(".pips"));
        expect(element.childNodes.length).toEqual(1);
    });

    it("should page the list if there are more than 10 cities", () => {
        openWeatherServiceStub = {
            britishCities(zoom: number): Observable<WeatherData[]> {
                return of(cities("Sheffield", "Cambridge", "London", "Leeds", "Manchester"
                    , "Birmingham", "Cardiff", "Edinburgh", "Belfast", "Nottingham", "Newcastle"));
            }
        };

        fixture.detectChanges();
        let element = fixture.debugElement.query(By.css(".pips"));
        expect(element.childNodes.length).toEqual(2);
    });

    it("should show only cities matching the filter", () => {
        openWeatherServiceStub = {
            britishCities(zoom: number): Observable<WeatherData[]> {
                return of(cities("Sheffield", "Cambridge", "London", "Leeds", "Manchester"
                    , "Birmingham", "Cardiff", "Edinburgh", "Belfast", "Nottingham", "Newcastle"));
            }
        };

        fixture.detectChanges();

        typeInQuery("shef").then(() => {
            let elements = fixture.debugElement.queryAll(By.css(".city"));
            expect(elements.length).toEqual(1);
            expect(elements[0].nativeElement.innerText).toEqual("Sheffield");
        });
    });
});

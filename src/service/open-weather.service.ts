import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export type WeatherData = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        sea_level: number;
        grnd_level: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    rain: {
        "1h": number;
        "3h": number;
    };
    snow: {
        "1h": number;
        "3h": number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

type Response = {
    list: WeatherData[]
}

const API_KEY = "194333f5b09188fbda8c4a3bbfea30b2";

/*
 * Unfortunately the British Isles cover more than the limit of 25 square degrees.
 * I have tried to be diplomatic, with apologies to Arlene Foster!
 * @see https://gist.github.com/Zutty/10646db70a4d0f685d639536aa2d01ac
 */
const BOUNDING_BOX: number[] = [-5, 51.3, 0.31, 56];

@Injectable()
export class OpenWeatherService {

    constructor(private httpClient: HttpClient) {
    }

    public britishCities(zoom: number = 7): Observable<WeatherData[]> {
        return this.httpClient.get<Response>("http://api.openweathermap.org/data/2.5/box/city",
            {params: {bbox: [...BOUNDING_BOX, zoom].join(","), cluster: "yes", lang: "en", appid: API_KEY}})
            .pipe(map(response => response.list));
    }
}

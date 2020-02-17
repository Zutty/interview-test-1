import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const API_KEY = "194333f5b09188fbda8c4a3bbfea30b2";

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

@Injectable()
export class OpenWeatherService {

    constructor(private httpClient: HttpClient) {
    }

    public city(query: string): Observable<WeatherData> {
        return this.httpClient.get<WeatherData>("http://api.openweathermap.org/data/2.5/weather",
            {params: {q: query, appid: API_KEY}});
    }
}

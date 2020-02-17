import 'zone.js/dist/zone';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {WeatherAppModule} from "./app/weather-app.module";

platformBrowserDynamic().bootstrapModule(WeatherAppModule);

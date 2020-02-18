import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TableComponent} from "./table.component";
import {By} from "@angular/platform-browser";
import {PagePipe} from "../transform/page.pipe";
import {PaginationComponent} from "./pagination.component";
import {FilterComponent} from "./filter.component";
import {SearchPipe} from "../transform/search.pipe";
import {SortPipe} from "../transform/sort.pipe";
import {OpenWeatherService} from "../service/open-weather.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe("TableComponent", () => {
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        return TestBed
            .configureTestingModule({
                imports: [
                    FormsModule,
                    HttpClientModule
                ],
                declarations: [
                    PagePipe,
                    PaginationComponent,
                    FilterComponent,
                    SearchPipe,
                    SortPipe,
                    TableComponent,
                ],
                providers: [OpenWeatherService]
            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TableComponent);
            })
    }));

    it("should do the thing", () => {
        let element = fixture.debugElement.query(By.css("h1"));
        fixture.detectChanges();
        expect(element.nativeElement.textContent).toEqual("HELLO");
    })
});

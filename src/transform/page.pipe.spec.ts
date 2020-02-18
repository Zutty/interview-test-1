import {PagePipe} from "./page.pipe";

describe("PagePipe", function () {
    let pipe: PagePipe;

    beforeEach(() => {
        pipe = new PagePipe();
    })

    it("should do the thing", () => {
        expect(pipe.transform([1,2,3,4,5,6], 0, 1)).toBe([1]);
    });
});

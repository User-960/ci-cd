import {minusUtil} from "./minus-util";

describe('minus', function () {
    test('positive', () => {
        expect(minusUtil(5, 5)).toBe(0);
    })

    test('negative', () => {
        expect(minusUtil(-5, -5)).toBe(0);
    })
});
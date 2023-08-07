import {plusUtil} from "./plus-util";

describe('sum', function () {
    test('positive', () => {
        expect(plusUtil(5, 5)).toBe(10);
    })

    test('negative', () => {
        expect(plusUtil(-5, -5)).toBe(-10);
    })
});
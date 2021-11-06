const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by h.a.", () => {

    it("ignores capital letters", () => {
        let expected = caesar("a message", 3);
        let actual = caesar("A Message", 3);

        expect(actual).to.equal(expected);
    });

    it("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        let expected = false
        let actual1 = caesar("A Message", -50)
        let actual2 = caesar("A Message", 29)
        let actual3 = caesar("A Message")
        let actual4 = caesar("A Message", 0)

        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
        expect(actual3).to.equal(expected);
        expect(actual4).to.equal(expected);

    });

    it("it handles shifts that go past the end of the alphabet", () => {
        let expected = "a"
        let actual = caesar("z", 1)

        expect(actual).to.equal(expected);
    });

    it("It maintains spaces and other nonalphabetic symbols in the message", () => {
        let expected = "b c*d"
        let actual = caesar("a b*c", 1)

        expect(actual).to.equal(expected);
    });
});
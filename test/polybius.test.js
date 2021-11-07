const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius() tests written by h.a.", () => {

    it("ignores capital letters", () => {
        let nocapital = polybius("a message");
        let capitalized = polybius("A Message");

        expect(capitalized).to.equal(nocapital);
    });


    it("it translates the letters i and j to 42.", () => {
        let expected = "42";
        let actual1 = polybius("j");
        let actual2 = polybius("i");

        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
    });

    it("translates 42 to (i/j)", () => {
        let expected = "(i/j)";
        let actual = polybius("42", false);

        expect(expected).to.equal(actual);
    });


    it("maintains spaces in the message, before and after encoding or decoding.", () => {
        let expected1 = "11 21";
        let expected2 = "a b";
        let actual1 = polybius("a b");
        let actual2 = polybius("11 21", false);

        expect(expected1).to.equal(actual1);
        expect(expected2).to.equal(actual2);
    });

})
const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution() tests written by h.a.", () => {

    it("returns false if the given alphabet isn't exactly 26 characters long.", () => {
        let expected = false;
        let actual = substitution("hello", "alphabet");

        expect(actual).to.equal(expected);
    });

    it("correctly translates the given phrase, based on the alphabet given to the function.", () => {
        let expected = "hello";
        let actual = substitution("SVOOL", "ZYXWVUTSRQPONMLKJIHGFEDCBA", false);

        expect(actual).to.equal(expected);
    });

    it("returns false if there are any duplicate characters in the given alphabet.", () => {
        let expected = false;
        let actual = substitution("hello", "ZYXWVUTSAQPONMLKJIHGFEDCBA");

        expect(actual).to.equal(expected);
    });

    it("maintains spaces in the message, before and after encoding or decoding.", () => {
        let expected1 = "Z Y";
        let expected2 = "y z";
        let actual1 = substitution("a b", "ZYXWVUTSRQPONMLKJIHGFEDCBA");
        let actual2 = substitution("B A", "ZYXWVUTSRQPONMLKJIHGFEDCBA", false);

        expect(expected1).to.equal(actual1);
        expect(expected2).to.equal(actual2);
    });

    it("ignores capital letters.", () => {
        let nocapital = substitution("hello", "ZYXWVUTSRQPONMLKJIHGFEDCBA");
        let capitalized = substitution("HELLO", "ZYXWVUTSRQPONMLKJIHGFEDCBA");

        expect(capitalized).to.equal(nocapital);
    });


})
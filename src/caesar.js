// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        if (shift == 0 || shift < -25 || shift > 25) return false;

        if (!encode) shift = -shift;

        let result = "";
        input = input.toLowerCase();

        for (let i = 0; i < input.length; i++) {
            let charCode = input.charCodeAt(i);

            if (charCode > 96 && charCode < 123) {
                let shiftedCharCode = charCode + shift;

                if (shiftedCharCode > 122) {
                    shiftedCharCode = shiftedCharCode - 123 + 97;
                }

                if (shiftedCharCode < 97) {
                    shiftedCharCode = 123 - (97 - shiftedCharCode);
                }

                let newLetter = String.fromCharCode(shiftedCharCode);
                result += newLetter;
            } else {
                console.log(input[i]);
                result += input[i];
            }
        }

        console.log(result);

        return result;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };
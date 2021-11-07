const caesarModule = (function() {

    function caesar(input, shift, encode = true) {
        if (shift == 0 || shift < -25 || shift > 25 || shift == null) return false;

        if (!encode) shift = -shift;

        let output = "";
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
                output += newLetter;
            } else {
                output += input[i];
            }
        }

        return output;
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };